'use client'
import {useParams} from "next/navigation";
import {User} from "@/lib/models/User";
import {mockUsers} from "@/lib/dummy/mockUsers";
import NotFound from "next/dist/client/components/builtin/not-found";
import UserCard from "@/app/(dashboard)/components/UserCard";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';


export default function UserPage(){
    const id = useParams().id;
    const user:User|undefined = mockUsers.find(x => x._id == id);
    if(user == undefined)
        return NotFound();
    else
        return (
            <div>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/users/"
                    >
                        users
                    </Link>
                    <Typography sx={{ color: 'text.primary' }}>{user.name}</Typography>
                </Breadcrumbs>
                <div>
                    
                </div>
                <UserCard user = {user}/>
            </div>
    )
}