import { useEffect, useState } from "react";

export default function Task4() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/users');
                const data = await response.json();
                setUsers(data.users);
            } catch (error) {
                console.error('Error fetching user data:', error);
                alert(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="task4">
            <a href="https://github.com/guptasajal411/react-tasks-mern/blob/master/src/Task4.js" className="sourceCodeLink">Source Code</a>
            <h1>User Table</h1>
            <table>
                <thead>
                    <tr className="px-1 py-1">
                        <th className="px-1 py-1">Name</th>
                        <th className="px-1 py-1">Email</th>
                        <th className="px-1 py-1">Phone</th>
                        <th className="px-1 py-1">Gender</th>
                        <th className="px-1 py-1">Age</th>
                        <th className="px-1 py-1">Username</th>
                        <th className="px-1 py-1">Birth Date</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr className="px-1 py-1" key={user.id}>
                            <td className="px-1 py-1">{`${user.firstName} ${user.lastName}`}</td>
                            <td className="px-1 py-1">{user.email}</td>
                            <td className="px-1 py-1">{user.phone}</td>
                            <td className="px-1 py-1">{user.gender}</td>
                            <td className="px-1 py-1">{user.age}</td>
                            <td className="px-1 py-1">{user.username}</td>
                            <td className="px-1 py-1">{user.birthDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}