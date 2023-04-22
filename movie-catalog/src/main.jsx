
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'
import Home from './Pages/Home/Home'
import Details from './Pages/Details/Details'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: '/details/:id',
    element: <Details />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
