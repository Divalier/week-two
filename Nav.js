import React from 'react'
import { Outlet,Link} from'react-router-dom';

class Nav extends React.Component {
  // constructor() {
  //   super();
  // }


  render() {
    return(
      <div>
        <Link to="/Dashbord">
       <button class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
    Sign in
</button></Link>
<Outlet/>

      </div>
    )
    }
    
  }


export default Nav