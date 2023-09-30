import { Container, Text } from "@chakra-ui/layout"
import { MutatingDots, Discuss, RotatingLines } from "react-loader-spinner"

export default function Loader() {
    return (
            <Container display={"flex"}  justifyContent={"center"} mt={"12%"} zIndex={100}>
                <RotatingLines
                    strokeColor="grey"
                    height="100"
                    width="100"
                    color="black"
                    secondaryColor='black'
                    radius='12.5'
                    ariaLabel="mutating-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </Container>
    )
}