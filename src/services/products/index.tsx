export const getDataNext = async (url: string) => {

    const res = await fetch(url, {
        cache: "force-cache",
        next: {
            tags: ['products']
        },
    });

    if (!res.ok) {
        throw new Error("Failed fetch data!");
    }
    return res.json();
}