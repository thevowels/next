'use client'
import {useParams} from "next/navigation";
import {User} from "@/lib/models/User";
import {mockUsers} from "@/lib/dummy/mockUsers";
import NotFound from "next/dist/client/components/builtin/not-found";
import UserCard from "@/app/(dashboard)/components/UserCard";
export default function UserPage(){
    const id = useParams().id;
    const user:User|undefined = mockUsers.find(x => x._id == id);
    if(user == undefined)
        return NotFound();
    else
        return (
            <div>
                <UserCard user = {user}/>
            </div>
    )
}