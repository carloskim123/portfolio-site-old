import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'


// layouts and pages
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import HasSubmitted from './components/HasSubmitted'
// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />} >
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="success" element={<HasSubmitted />} />
        <Route path="error" element={Error}/>
        
      </Route>
    </>

  )
)


// app
function App() {

  return (
    <>
      <RouterProvider router={router}>
        <RootLayout>
        </RootLayout>
      </RouterProvider>
    </>
  )
}

export default App
