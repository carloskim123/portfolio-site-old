import { Container, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function NotFound() {
    const [secondsLeft, setSecondsLeft] = useState(10);

    const handleTick = () => {
        setSecondsLeft(secondsLeft - 1);
    }
    setInterval(handleTick, 1000);

    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(function () {
            navigate("/")
        }, 5000)
    }, [])

    return (
        <Container textAlign={"center"} mt={"15%"}>
            <Text>The Page Your Looking for was not found!!</Text>
            <Text>Redirecting in {secondsLeft} seconds</Text>
        </Container>
    )
}

export default NotFound