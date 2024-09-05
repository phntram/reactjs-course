import { useEffect, useState } from "react";


function Users() {
    const [users, setUsers] = useState([]);

    // manage loading state
    const [pending, setPending] = useState(true);

    // useEffect must not return anything besides a function, which is used for clean-up.
    // It looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately.
    async function fetchAllUsers() {
        try {
            setPending(true);
            const res = await fetch('https://dummyjson.com/users');
            const data = await res.json();
            console.log(data);
            if (data?.users) {
                setUsers(data.users);
                setPending(false);
            } else {
                setUsers([]);
                setPending(false);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchAllUsers();
    }, []);

    if (pending) {
        return (
            <h1>Fetching users....</h1>
        );
    }

    return (
        <div>
            <h1>All Users Lists</h1>
            <ul>
                {users && users.length > 0 ? users.map((user) => <li key={user?.id}>{user?.
                    firstName}</li>) : <h1>No users found! Please try again.</h1>}
            </ul>
        </div>
    );
}

export default Users;