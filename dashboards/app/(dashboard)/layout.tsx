import Box from '@mui/material/Box';
import NavBar from "@/app/(dashboard)/components/NavBar";
import SideBar from "@/app/(dashboard)/components/Sidebar";
import Toolbar from '@mui/material/Toolbar';


export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode
}) {
    return (
        <Box sx={{
            height: '100vh',
        }}>
            <NavBar/>
            <Toolbar/>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <SideBar />
                <Box sx={{mx: 'auto'}} >
                    {children}
                </Box>

            </Box>
        </Box>
    )
}
