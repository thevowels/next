export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <div>
            This is dashboard Layout
        </div>
        <main>{children}</main>
        </body>
        </html>
    )
}
