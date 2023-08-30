import { Container, DrawerFooter } from '@chakra-ui/react'
import React from 'react'

function Footer() {
  return (
    <footer>
        <Container>
            <DrawerFooter>
                <p>Copyright © {new Date().getFullYear()} Carlos Kirui</p>
            </DrawerFooter>
        </Container>
    </footer>
  )
}

export default Footer