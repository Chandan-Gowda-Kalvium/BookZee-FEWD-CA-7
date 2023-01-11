import { Link } from "react-router-dom"
import { useEffect } from "react"
import './style.css'

function NavBar() {
  const closingAfterClick=()=>{
    document.getElementById("nav-check").checked = false;
  }
  useEffect(()=>{
    setInterval(()=>{
      const name = sessionStorage.getItem('name')
      if(name){
        document.getElementById('register').style.display = 'none'
      }
      document.getElementById('abc').innerHTML = sessionStorage.getItem('mail')
    },100000)
    return clearInterval()
  })

  return (
    <div>
        <div class="nav">
            <div class="nav-title">
                <h1 className="logo">BookZee</h1>
            </div>
            <div id="nav-links" class="nav-links">
                <Link id="register" to='/form'>
                    <h3 className="btnn" onClick={()=>closingAfterClick()}>Register</h3>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default NavBar