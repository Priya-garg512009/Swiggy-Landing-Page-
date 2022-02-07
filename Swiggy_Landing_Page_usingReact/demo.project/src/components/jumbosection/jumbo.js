import React from 'react'
import './jumbo.css'

const Jumbo =()=>
{
    return(
        <div>
        <section className="jumbo">
          <div className="jumbo_div1" id="int">
            <div className="header width">
              <div className="logo">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1200px-Swiggy_logo.svg.png"
                  alt="Logo"
                  width="200px"
                />
              </div>
              <div className="jumbo_button">
                <a href="/login" className="login">
                  Login
                </a>
                <a href="/signup" className="signup">
                  Sign Up
                </a>
              </div>
            </div>
            <div className="contain width">
              <div id="containers">
                <div id="flip">
                  <div>
                    <div className="hungrydiv">Hungry?</div>
                  </div>
                  <div>
                    <div className="hungrydiv">Unexpected Guest?</div>
                  </div>
                  <div>
                    <div className="hungrydiv">Cooking gone wrong?</div>
                  </div>
                  <div>
                    <div className="hungrydiv">Movie marathon?</div>
                  </div>
                  <div>
                    <div className="hungrydiv">Game night?</div>
                  </div>
                  <div>
                    <div className="hungrydiv">Late night at office?</div>
                  </div>
                </div>
              </div>
              <p id="jumbo_heading">Order food from favourite restaurants near you.</p>
            </div>
            <div className="input-container width">
              <input type="text" placeholder="Enter your delivery location" />
              <button type="submit" className="locateBtn">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <i className="fa fa-crosshairs"></i>Locate Me
              </button>
              <button type="submit" className="foodBtn">
                FIND FOOD
              </button>
            </div>
            <div className="cities width">
              <p id="jumbo_heading">POPULAR CITIES IN INDIA</p>
              <ul className="city-names">
                <li><a href="https://web.archive.org/web/20210903174711/https:/www.swiggy.com/ahmedabad" className="a1">Ahemdabad</a></li>
                <li><a href="https://web.archive.org/web/20210903174711/https://www.swiggy.com/bangalore"className="a2">Bangalore</a></li>
                <li><a href="https://web.archive.org/web/20210903174711/https://www.swiggy.com/chennai" className="a1">Chennai</a></li>
                <li><a href="https://web.archive.org/web/20210903174711/https://www.swiggy.com/delhi" className="a2">Delhi</a></li>
                <li><a href="https://web.archive.org/web/20210903174711/https://www.swiggy.com/gurgaon" className="a1">Gurgaon</a></li>
                <li><a href="https://web.archive.org/web/20210903174711/https://www.swiggy.com/hyderabad" className="a2">Hyderabad</a></li>
                <li><a href="https://web.archive.org/web/20210903174711/https://www.swiggy.com/kolkata" className="a1">Kolkata</a></li>
                <li><a href="https://web.archive.org/web/20210903174711/https://www.swiggy.com/mumbai"  className="a2">Mumbai</a></li>
                <li><a href="https://web.archive.org/web/20210903174711/https://www.swiggy.com/mumbai" className="a1">Pune</a></li>
                <li><a href="https://web.archive.org/city-links" className="a2">& more</a></li>
              </ul>
            </div>
          </div>
          <div className="img" id="hide"></div>
        </section>
      </div>
    )
}
export default Jumbo