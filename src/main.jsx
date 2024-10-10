import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import{createBrowserRouter,RouterProvider,} from 'react-router-dom'
import Root from './root.jsx'
import Cart from './components/Cart.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Productinfo from './components/Productinfo.jsx'
import Errorpage from './components/Errorpage.jsx'

const router = createBrowserRouter([{
  path:"/",
  element:<Root/>,
  errorElement: <Errorpage />,

  
  children:[
    {
      path:"/",
      element:<App/>
    },
    {
      path:"/cart",
      element:<Cart/>

    }
    ,
    {
   
      path:"/productinfo/:productid_id",
      element:<Productinfo/>
    }
    ,
    {
   
      path:"/productinfo/:productid_id",
      element:<Productinfo/>
    }
  
  ]


}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
