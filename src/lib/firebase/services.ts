import { addDoc, collection, doc, getDoc, getDocs, getFirestore, orderBy, query, updateDoc, where } from "firebase/firestore";
import app from "./init";
import bcrypt from "bcrypt";

const firestore = getFirestore(app);

export async function retrieveData(collectionName: string) {
    const snapshot = await getDocs(query(collection(firestore, collectionName), orderBy("name", "asc")));
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
    const snapshot = await getDoc(doc(firestore, collectionName, id));
    const data = snapshot.data();

    return data;
}

export async function register(
    userData: {
        username: string;
        email: string;
        password: string;
        role?: string;
    }) {

    const q = query(
        collection(firestore, "users"),
        where("email", "==", userData.email)
    );

    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    //? Mengecek apakah email sudah terdaftar atau belum
    if (data.length > 0) {
        return { status: false, message: "Email already registered!", statusCode: 400 };

    } else {
        //? Hashing password
        userData.password = await bcrypt.hash(userData.password, 10);
        userData.role = "member";

        //? Insert data ke database
        try {
            await addDoc(collection(firestore, "users"), userData);
            return { status: true, message: "Register success!", statusCode: 200 };
        } catch (error) {
            return { status: false, message: "Register failed!", statusCode: 400 };
        }
    }
}

export async function login(userData: { email: string }) {
    const q = query(collection(firestore, "users"), where("email", "==", userData.email));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    if (data) {
        return data[0];
    } else {
        return null;
    }
}

export async function loginWithGoogle(userData: any, callback: any) {
    const q = query(collection(firestore, "users"), where("email", "==", userData.email));
    const snapshot = await getDocs(q);
    const data: any = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    if (data.length > 0) {
        userData.role = data[0].role;
        await updateDoc(doc(firestore, 'users', data[0].id), userData).then(() => {
            callback({ status: true, data: userData });
        });

    } else {
        userData.role = "member";
        await addDoc(collection(firestore, "users"), userData).then(() => {
            callback({ status: true, data: userData });
        });
    }
}