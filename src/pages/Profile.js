import { Fragment, useContext } from "react"
import { AppContext } from "../App"
import ChangeProfile from "./ChangeProfile";


const Profile = () => {
    const { username } = useContext(AppContext);
    return (
        <Fragment>
            <div>This is the Profile component. The user is:{username} </div>
            <ChangeProfile />
        </Fragment>
    )
}

export default Profile