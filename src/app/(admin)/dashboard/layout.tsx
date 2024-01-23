export default function Layaout({children, analytics}: {children: React.ReactNode; analytics: React.ReactNode}) {
    return (
        <>
        {/* Cara penggunaan Parallel Routes */}
            <div className="p-5 w-full flex">
                <div className="w-1/2">{children}</div>
                <div className="w-1/2">{analytics}</div>
            </div>
        </>
    )
}
