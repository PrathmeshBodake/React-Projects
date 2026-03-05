import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Batches from './components/Batches/Batches.jsx'
import Github, { isLoader } from './components/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout />,
    children : [
      {
        path : "",
        element : <Home />
      },
      {
        path : "about",
        element : <About />
      },
      {
        path : "contact",
        element : <Contact />
      },
      {
        path : "batches",
        element : <Batches />
      
      },
      {
        loader : isLoader,
        path : "github",
        element : <Github />
      
      },
    ]
  }
])

// const router = createBrowserRouter([
//    createsRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route index element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="contact" element={<Contact />} />
//       <Route path="batches" element={<Batches />} />
//     </Route>
//   )
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
