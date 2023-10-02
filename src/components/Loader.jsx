import { Container, Text } from "@chakra-ui/layout"
import { MutatingDots, Discuss, RotatingLines, TailSpin } from "react-loader-spinner"

export default function Loader() {
    return (
            <Container display={"flex"}  justifyContent={"center"} mt={"30vh"}>
            <TailSpin
                height="80"
                width="80"
                
                color="#000"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
            </Container>
    )
}