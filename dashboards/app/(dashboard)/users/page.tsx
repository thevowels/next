import {User } from "@/lib/models/User";
import {mockUsers} from "@/lib/dummy/mockUsers";


export  default  function UsersPage()
{
    const users: User[] = mockUsers;
    return (
        <div>
            User page
            {
                users.map((user: User) => (
                    <div key={user._id}>
                        {
                            user.name
                        }
                    </div>
                ))
            }
        </div>
    )
}