import { useContext, useState } from "react";
import { AppContext } from "../App";

const ChangeProfile = () => {
    const [newUsername, setNewUsername] = useState("");
    const { setUsername } = useContext(AppContext);

    const handleSetUsername = () => {
        if (newUsername !== "") {
            setUsername(newUsername);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter new username.."
                onChange={(e) => setNewUsername(e.target.value)}
            /><br />
            <button onClick={handleSetUsername}>Set username</button>
        </div>
    );
};

export default ChangeProfile;