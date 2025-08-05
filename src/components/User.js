import { useState } from "react";

const User = ({name, location}) => {
    const [count] = useState(2);
    return (
        <div className="user-card">
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h3>Count: {count}</h3>
        </div>
    );
}

export default User;