import React from 'react'
import './resturant.css'

function Resturant()
{
    return(
        <section class="resturantsection">
        <div className="container">
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-5">
            <h2 class="resh2">Restaurants in </h2>
            <h2 class="resh22">your pocket</h2>
            <div class="resdiv1">Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</div>
            <nav className="twoimg" style={{display:"flex",gap:"20px"}}>
                <a href="https://web.archive.org/web/20210903174711/https://play.google.com/store/apps/details?id=in.swiggy.android"><img class="restimg1" width="200" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp" alt=""/></a>
                <a href="https://web.archive.org/web/20201111215216/https://itunes.apple.com/in/app/swiggy-food-order-delivery/id989540920"><img class="restimg2" width="200" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty" alt=""/></a>
            </nav>
            </div>
            <div className="col-sm-6">
                <div class="screenshots" style={{display:"flex"}}>
                    <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n" alt=""/>
                    <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn" alt=""/>
                </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Resturant;