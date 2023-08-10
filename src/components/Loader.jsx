import { Container, Text } from "@chakra-ui/layout"
import { Dna } from "react-loader-spinner"

export default function Loader() {
    return (
        <Container display={"flex"} justifyContent={"center"} mt={"10%"}>
            <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </Container>
    )
}