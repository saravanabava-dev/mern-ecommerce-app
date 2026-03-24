import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Login.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ServicesSection from './ServicesSection.jsx'
import TestimonialsSection from './TestonimialSection.jsx'
import FeaturesSection from './FeaturesSection.jsx'
import Logis from './Logis.jsx'
import Register from './Register.jsx'
import Forgot from './Forgot.jsx'
import Reset from './Reset.jsx'
import Servicesfun from './Servicesfun.jsx'
import Prising from './Prising.jsx'
import Price2 from './Price2.jsx'
import Price4 from './Price4.jsx'
import Adress from './Adress.jsx'
import Mainadd from './Mainadd.jsx'
import Pickup from './Pickup.jsx'
import AddReveal from './AddReveal.jsx'
import Location from './Location.jsx'
import Listing_details from './Listing_details.jsx'
import Address_delivery from './Address_delivery.jsx'

const obj=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
   
  },
  {
    path:"/login",
element:<Logis/>,

  },
  {
    path:'/services',
    element:<ServicesSection/>
  },
  {
    path:'/about',
    element:(<><TestimonialsSection/>,
    <FeaturesSection/>
    </>
    )
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'/forgot',
    element:<Forgot/>
  },
  {
    path:'/reset-password/:token',
    element:<Reset/>
  },
  {
    path:'/ser',
    element:<Servicesfun/>
  },
  {
    path:'/price',
    element:<Prising/>
  },
{
path:'/price2',
element:<Price2/>
},
{
path:'/price4',
element:<Price4/>
},
{
  path:'/addres',
  element:<Adress/>
},
{
  path:'/addr',
  element:<Mainadd/>
},
{
  path:'/booking',
  element:<Pickup/>
},
{
  path:"/address_details",
  element:<AddReveal/>
},
{
  path:'/location',
  element:<Location/>
},
{
  path:'/selected',
  element:<Listing_details/>
},
{
  path:'/delivery',
  element:<Address_delivery/>
}
  
])
createRoot(document.getElementById('root')).render(

    <RouterProvider router={obj}/>

)
