export default function Layout({ children }) {
    return (
        <>
        <div className="flex">
            <Sidebar />

        </div>
            {children}
        </>

    )
}