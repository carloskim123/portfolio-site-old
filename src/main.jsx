import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import "./app.css"
import { configDotenv } from 'dotenv'

configDotenv();


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)
