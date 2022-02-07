import React from 'react'
import './feature.css'

function Feature()
{
  return(
      <section class="features">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="row">
              <img class="featureimg1" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf" alt=""/>
              <h2 class="featurediv1">No Minimum Order</h2>
              <div class="featurediv2">Order in for yourself or for the group, with no restrictions on order value</div>
              </div>
            </div>


            <div className="col-sm-4">
            <div className="row">
              <img class="featureimg1 sec" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy" alt=""/>
              <h2 class="featurediv1">Live Order Tracking</h2>
              <div class="featurediv2">Know where your order is at all times,</div><div class="featurediv2">from the restaurant to your doorstep</div>
              </div>
            </div>

            <div className="col-sm-4">
            <img class="featureimg3" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"  alt=""/>
            <h2 class="featurediv1">Lightning-Fast Delivery</h2>
            <div class="featurediv2">Experience Swiggy's superfast delivery</div><div class="featurediv2">for food delivered fresh & on time</div>
            </div>

            
          </div>
        </div>
        </section>
    )
}
export default Feature;