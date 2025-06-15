import 'bootstrap/dist/css/bootstrap.min.css' 
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Home from './Home' 
import ServiceReq from './ServiceReq' 
import TrackOrder from './TrackOrder' 
import Payment from './Payment' 
import Feedback from './Feedback' 

// import CheckBalance from './CheckBalance' 
// import Info from './Info' 

function App() {
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/signup'   element={<Signup />}>  </Route>
          <Route path='/login'   element={<Login />}>  </Route>
          <Route path='/home'   element={<Home />}>  </Route>
          <Route path='/servicereq'   element={<ServiceReq />}>  </Route>
          <Route path='/trackorder'   element={<TrackOrder />}>  </Route>
          <Route path='/payment'   element={<Payment />}>  </Route>
          <Route path='/feedback'   element={<Feedback />}>  </Route>
          
          {/* <Route path='/checkbalance'   element={<CheckBalance />}>  </Route>
          <Route path='/info'   element={<Info />}>  </Route>  */}
        </Routes>
      </BrowserRouter>
      
    </div>
      
  )
}
export default App; 

