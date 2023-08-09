import { Suspense, useContext } from "react"
import { AppContext } from "../App"
import Loading from "../Loading"

const Home = () => {
    const { username } = useContext(AppContext)
    return (
        <Suspense fallback={<Loading />}>
            <div>This is the home component. The user is: {username}</div>
        </Suspense>
    )
}

export default Home