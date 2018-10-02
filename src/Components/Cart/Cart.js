import React, { Component } from 'react';
import './Cart.css';
import {Link} from 'react-router-dom';
class Cart extends Component {
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
                <h3 className="cart-header">Place Your Order</h3>
            </div>
          </div>
        </div>

      </div>
</div>

{/*content area */}
<section className="cart-content">
<div className="container">
    <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <table class="table table-striped">
  <thead className="table-light">
    <tr>
      <th scope="col">ITEM</th>
      <th scope="col">QUANTITY</th>
      <th scope="col">DISCOUNT</th>
      <th scope="col">TOTAL</th>
      <th scope="col">ACTIONS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">Orly Airport Private transfer</td>
      <td>1</td>
      <td>50%</td>
      <td>24,751</td>
      <td><i class="fa fa-trash-o" aria-hidden="true"></i>
      <i class="fa fa-repeat" aria-hidden="true"></i></td>
    </tr>
    <tr>
    <td scope="row">Paris Disneyland Transfer</td>
      <td>1</td>
      <td>80%</td>
      <td>55,751</td>
      <td><i class="fa fa-trash-o" aria-hidden="true"></i>
      <i class="fa fa-repeat" aria-hidden="true"></i></td>
    </tr>
  </tbody>
</table>

<div className="second-table-below">
<table class="table table-striped">
  <thead className="table-light">
    <tr>
      <th scope="col">Add Option / Services</th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">Dedicated Tour guide <strong>+$34</strong></td>
      <td></td>
      <td></td>
      <td></td>
      <td>
     
                                <label class="switch ">
          <input type="checkbox" class="primary" />
          <span class="slider round"></span>
          </label>
      </td>
    </tr>
    <tr>
      <td scope="row">Insurance <strong>+$24</strong></td>
      <td></td>
      <td></td>
      <td></td>
      <td>
     
                                <label class="switch ">
          <input type="checkbox" class="primary" />
          <span class="slider round"></span>
          </label>
      </td>
    </tr>
    <tr>
      <td scope="row">Extra large baggage <strong>+$12*</strong></td>
      <td></td>
      <td></td>
      <td></td>
      <td>
     
                                <label class="switch ">
          <input type="checkbox" class="primary" />
          <span class="slider round"></span>
          </label>
      </td>
    </tr>
  </tbody>
</table>
</div>
            </div>
    </div>
</div>
</section>
{/*end content area */}
            </div>
            </React.Fragment>
        );
    }
}

export default Cart;