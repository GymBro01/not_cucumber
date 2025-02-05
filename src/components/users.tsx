import { FC, useEffect, useState } from "react";
import axiosInstance from "../../api/apiinstance";

interface User 
{
    id: number;
    name: string;
    email: string;
}

const Users:FC = () => {
    const [users, setUsers]=useState<User[]>([]);
    const [isLoading, setLoading]=useState<boolean>(true);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axiosInstance.get('/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Ошибка загрузки пользователей:', error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchUsers();
     }, []);

    if(isLoading)
    {
        return(<><div>Loading...</div></>);
    }
    return
    (
        <>
        <div>
            <ul>
                {users.map((user)=>(
                    <li key={user.id}>
                        {user.name}{user.email}
                    </li>
                ))}

            </ul>
        </div>
        </>
    );
};


export default Users;