import {User } from "@/lib/models/User";
import {mockUsers} from "@/lib/dummy/mockUsers";
import UserDataGrid from "@/app/(dashboard)/components/UserDataGrid";

export  default  function UsersPage()
{
    const users: User[] = mockUsers;
    return (
        <div className={"mx-auto max-w-5xl w-full p-4"}>
            <UserDataGrid users={users}/>
        </div>
    )
}