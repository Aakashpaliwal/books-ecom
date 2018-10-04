import React, { Component } from 'react';
import './Checkout.css';
import {Link} from 'react-router-dom';

class Checkout extends Component {
    render() {
        return (
            <React.Fragment>
            <div>
            <div className="background-img-custom" id="home">
        <div className="bg-div">
        <div className="container">
          <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
            {/* <h3>Your <span className="custom-inner-header"><strong>Comfort Partner</strong></span></h3>
            <button type="button" className="btn btn-primary btn-custom-radius">LEARN MORE</button> */}
                <h3 className="cart-header">Shopping Cart</h3>
                <p>Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.</p>
            </div>
          </div>
        </div>

      </div>
</div>

{/*checkout content */}
<section className="checkout-content">
<div className="container">
    <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="custom-card">No shadow</div>
        </div>
        </div>
                <br /><br />
        <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <div className="checkout-left-content">
                <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h3>Billing Details</h3>
                    <hr />
                    <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">First Name</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="First Name" />
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Last Name</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="Last Name" />
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Company Name</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Tesla" />
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">Email Address</label>
      <input type="email" class="form-control" id="inputCity" />
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">Country</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Phone</label>
      <input type="text" class="form-control" id="inputZip" />
    </div>
  </div>
</form>
            </div>

            </div>
            </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="checkout-right-content">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h3>YOur Order</h3>
                        <hr />
                    </div>
                </div>
            </div>

    </div>
</div>

</section>

{/*end checkout content */}
            </div>
            </React.Fragment>
        );
    }
}

export default Checkout;