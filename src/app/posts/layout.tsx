export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className="bg-sky-950/40">
            {children}
        </div>
    );
}