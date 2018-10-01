import React, { Component } from 'react'
import './Home.css';
// import './slider';
export class Home extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
    first_name : "",
    last_name : "",
    email : "",
    subject : "",
    contact_number : ""
  
    };
  }
   
      change  = e => {
        this.setState ({
          [e.target.name]: e.target.value
        });
      };
      getWebsite = () => {
        fetch("/")
    };
      onSubmit = e =>
      {
          e.preventDefault();
          console.log(this.state);
        //   if (
        //     this.state.category === "" ||
        //     this.state.subcategory === "" ||
        //     this.state.company === "" ||
        //     this.state.model === "" ||
        //     this.state.manufacturing_year === ""
           
        //  ) {
        //     alert("Unable to contact because fields were left blank");
        //     }else {
        //         fetch(`/contact`,{
        //             method : "POST",
        //             headers : {
        //                 "Content-Type": "application/json; charset=utf-8"
        //             },
        //             body: JSON.stringify(this.state)
        //         }
        //         ).then(this.getWebsite);
        //       }
          this.setState ({
            first_name : "",
            last_name : "",
            email : "",
            subject : "",
            contact_number : ""

          })
          //replace /contact with server url
          fetch('/partner', {
            method : "POST",
            headers : {
              "Content-Type" : "application/json; chardet=utf-8"
            },
            body : JSON.stringify(this.state)
          }).then(this.getWebsite);

      };
  render() {
    return (
      <div>
          <div>
    {/*SLIDER HERE */}
      <div className="background-img-custom" id="home">
        <div className="container">
          <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 custom-upper-tabs">
            {/* <h3>Your <span className="custom-inner-header"><strong>Comfort Partner</strong></span></h3>
            <button type="button" className="btn btn-primary btn-custom-radius">LEARN MORE</button> */}
            <nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</a>
    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
  </div>
</nav>
<div class="tab-content custom-tab-content-bg" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
  <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity" />
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip" />
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck" />
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
  </div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
</div>
            </div>
          </div>
        </div>

      </div>



    {/* END SLIDER HERE */}
    {/*upper four boxes */}
      {/* <section className="custom-upper-boxes">
        <div className="container">
          <div className = "row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 custom-three-parent-padd">
                <div className="custom-inner-boxes">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                      <span class="badge badge-primary custom-badge">1</span>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 custom-parent-col-padd">
                        <p><strong>Money Care</strong></p>
                        <p>Lorem Ipsum Dolor Simit</p>
                      </div>
                    </div>
                </div>
            </div>

             <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 custom-three-parent-padd">
                <div className="custom-inner-boxes">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                      <span class="badge badge-primary custom-badge">1</span>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 custom-parent-col-padd">
                        <p><strong>Money Care</strong></p>
                        <p>Lorem Ipsum Dolor Simit</p>
                      </div>
                    </div>
                </div>
            </div>

             <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 custom-three-parent-padd">
                <div className="custom-inner-boxes">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                      <span class="badge badge-primary custom-badge">1</span>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 custom-parent-col-padd">
                        <p><strong>Money Care</strong></p>
                        <p>Lorem Ipsum Dolor Simit</p>
                      </div>
                    </div>
                </div>
            </div>

             <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 custom-three-parent-padd">
                <div className="custom-inner-boxes">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                      <span class="badge badge-primary custom-badge">1</span>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 custom-parent-col-padd">
                        <p><strong>Money Care</strong></p>
                        <p>Lorem Ipsum Dolor Simit</p>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section> */}
    {/*end upper four boxes */}
      
    {/* offer section */}
        <section className = "service-nikhil-content" id="service">
          <div className="container">
            <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h2 className="text-center">PARIS TOP TOURS</h2>
            <p>Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur consequat.</p>
            </div>

            </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <div className="custom-img-box">
                  <div className="ribbons popular">
                  <span>Popular</span>
                  </div>
                 <img src = {require('../img/tour_box_1.jpg')} className="img-fluid" />
                 <div className="short_info">
                 <i className="fa fa-university" aria-hidden="true"></i>
                 <span className="history-text">Historic Buildings</span>
                 <span className="price"><sup>$</sup>39</span>
                 </div>
                 <div class="tour_title">
                        <h3><strong>Arc Triomphe</strong> tour</h3>
                        <div class="rating">
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o" aria-hidden="true"></i>
                        <small>(75)</small>
                        </div>
                        <div class="wishlist">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>

                        </div>
                    </div>
                  </div>
                 
                </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <div className="custom-img-box">
                  <div className="ribbons popular">
                  <span>Popular</span>
                  </div>
                 <img src = {require('../img/tour_box_1.jpg')} className="img-fluid" />
                 <div className="short_info">
                 <i className="fa fa-university" aria-hidden="true"></i>
                 <span className="history-text">Historic Buildings</span>
                 <span className="price"><sup>$</sup>39</span>
                 </div>
                 <div class="tour_title">
                        <h3><strong>Arc Triomphe</strong> tour</h3>
                        <div class="rating">
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o" aria-hidden="true"></i>
                        <small>(75)</small>
                        </div>
                        <div class="wishlist">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>

                        </div>
                    </div>
                  </div>
                 
                </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <div className="custom-img-box">
                  <div className="ribbons popular">
                  <span>Popular</span>
                  </div>
                 <img src = {require('../img/tour_box_1.jpg')} className="img-fluid" />
                 <div className="short_info">
                 <i className="fa fa-university" aria-hidden="true"></i>
                 <span className="history-text">Historic Buildings</span>
                 <span className="price"><sup>$</sup>39</span>
                 </div>
                 <div class="tour_title">
                        <h3><strong>Arc Triomphe</strong> tour</h3>
                        <div class="rating">
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o" aria-hidden="true"></i>
                        <small>(75)</small>
                        </div>
                        <div class="wishlist">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>

                        </div>
                    </div>
                  </div>
                 
                </div>

               
              <div className="row custom-image-rows">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <div className="custom-img-box">
                  <div className="ribbons popular">
                  <span>Popular</span>
                  </div>
                 <img src = {require('../img/tour_box_1.jpg')} className="img-fluid" />
                 <div className="short_info">
                 <i className="fa fa-university" aria-hidden="true"></i>
                 <span className="history-text">Historic Buildings</span>
                 <span className="price"><sup>$</sup>39</span>
                 </div>
                 <div class="tour_title">
                        <h3><strong>Arc Triomphe</strong> tour</h3>
                        <div class="rating">
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o" aria-hidden="true"></i>
                        <small>(75)</small>
                        </div>
                        <div class="wishlist">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>

                        </div>
                    </div>
                  </div>
                 
                </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <div className="custom-img-box">
                  <div className="ribbons popular">
                  <span>Popular</span>
                  </div>
                 <img src = {require('../img/tour_box_1.jpg')} className="img-fluid" />
                 <div className="short_info">
                 <i className="fa fa-university" aria-hidden="true"></i>
                 <span className="history-text">Historic Buildings</span>
                 <span className="price"><sup>$</sup>39</span>
                 </div>
                 <div class="tour_title">
                        <h3><strong>Arc Triomphe</strong> tour</h3>
                        <div class="rating">
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o" aria-hidden="true"></i>
                        <small>(75)</small>
                        </div>
                        <div class="wishlist">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>

                        </div>
                    </div>
                  </div>
                 
                </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <div className="custom-img-box">
                  <div className="ribbons popular">
                  <span>Popular</span>
                  </div>
                 <img src = {require('../img/tour_box_1.jpg')} className="img-fluid" />
                 <div className="short_info">
                 <i className="fa fa-university" aria-hidden="true"></i>
                 <span className="history-text">Historic Buildings</span>
                 <span className="price"><sup>$</sup>39</span>
                 </div>
                 <div class="tour_title">
                        <h3><strong>Arc Triomphe</strong> tour</h3>
                        <div class="rating">
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o colored" aria-hidden="true"></i>
                        <i class="fa fa-smile-o" aria-hidden="true"></i>
                        <small>(75)</small>
                        </div>
                        <div class="wishlist">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>

                        </div>
                    </div>
                  </div>
                 
                </div>
             
                 
              </div>

            <div className="row custom-image-rows">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                <button type="button" className="btn btn-info">View More&nbsp;&nbsp;<i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
</button>
              </div>
            </div>
             



              </div>





          </div>
        </section>



    {/* end offer section */}
    {/*choose us section */}
      <section className="belong-anywhere">
      <div className="belong-color">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
            <h3>BELONG ANYWHERE</h3>
            <p>
						Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex.
					</p>
          <i className="fa fa-play" aria-hidden="true"></i>

          </div>
        </div>
        </div>
        </div>
      </section>
    {/* end choose us section*/}
    {/*choose us blocks*/}
 
    {/*end blocks */}
    {/*custom counter */}
    {/* <section class="custom-clients text-center  ">
            <div class="container">
                <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <h2 class="timer" data-to="300" data-speed="1500"></h2>
       <p class="count-text ">Our Clients</p>
    </div>

   <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <h2 class="timer" data-to="1700" data-speed="1500"></h2>
      <p class="count-text ">Projects</p>
    </div>

   <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <h2 class="timer" data-to="11900" data-speed="1500"></h2>
      <p class="count-text ">Happy Clients</p>
    </div>

    <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <h2 class="timer" data-to="157" data-speed="1500"></h2>
      <p class="count-text ">Our Domestic Projects</p>
    </div>
</div>
                    </div>
                </section> */}
    {/*end custom counter */}
     {/*software solutions */}
    <section className="good-reasons">
       <div className="container">
          <div className="row">
             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                <h3 className="good-first-header">Some <span className="colored-header">good</span> reasons</h3>
                <p>Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur consequat. </p>  
             </div>     
          </div>  

          <div className="row">
             <div className="col-lg-4 col-md-4 co-sm-12 col-xs-12">
                <div className="good-content-here text-center">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <h3><span className="colored-header">+120</span> Premium Tours</h3>
                <p>
							Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset.
						</p>
            <button type = "button" className="btn btn-outline-secondary custom-read-btns">READ MORE</button>
                </div>  
             </div>     

              <div className="col-lg-4 col-md-4 co-sm-12 col-xs-12">
                <div className="good-content-here text-center">
                <i className="fa fa-user-o" aria-hidden="true"></i>
                <h3><span className="colored-header">+1000</span> Customers</h3>
                <p>
							Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset.
						</p>
            <button type = "button" className="btn btn-outline-secondary custom-read-btns">READ MORE</button>
                </div>  
             </div>     

              <div className="col-lg-4 col-md-4 co-sm-12 col-xs-12">
                <div className="good-content-here text-center">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <h3><span className="colored-header">H24</span> Support</h3>
                <p>
							Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset.
						</p>
            <button type = "button" className="btn btn-outline-secondary custom-read-btns">READ MORE</button>
                </div>  
             </div>    
            
          </div>  
          <hr /> 

          <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="city-content">
                 <img src = {require('../img/laptop.png')} className="img-fluid" /> 
                 </div>
              </div>    

               <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="city-content">
                 <h3><span>Get Started</span> with CityTours</h3>
                 <p>
						Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset.
					</p>
          <ol>
          <li> Select your preferred tours</li>
          <li> Purchase tickets and options</li>
          <li>Pick them directly from your office</li>
          </ol> 
          <button type="button" className="btn btn-info">START NOW</button>
                 </div>
              </div>    
          </div>    
       </div>            
     </section>           
          {/*end softwae solutions */}
    {/* Pricing plan
      <div className="pricing-content" id="price">
        <div className="container">
          <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h2 className="text-center">Pricing Table</h2>
              <hr className="below-header-hr"></hr>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
             <div className="plan-custom-box text-center center-block">
              <h5>basic plan</h5>
              <div className="price-border">
              <h1>$19</h1>
              <h5><strong>/ month</strong></h5>
              </div>
              <p>1 GB Disk Space</p>
              <p>100 Email Account</p>
              <p>24 / 24 Support</p>
              <button type="button" className="btn btn-outline-primary">Purchase Now</button>
             </div> 
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
             <div className="plan-custom-box text-center center-block">
              <h5>silver plan</h5>
              <div className="price-border">
              <h1>$19</h1>
              <h5><strong>/ month</strong></h5>
              </div>
              <p>1 GB Disk Space</p>
              <p>100 Email Account</p>
              <p>24 / 24 Support</p>
              <button type="button" className="btn btn-outline-primary">Purchase Now</button>
             </div> 
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
             <div className="plan-custom-box text-center center-block">
              <h5>gold plan</h5>
              <div className="price-border">
              <h1>$19</h1>
              <h5><strong>/ month</strong></h5>
              </div>
              <p>1 GB Disk Space</p>
              <p>100 Email Account</p>
              <p>24 / 24 Support</p>
              <button type="button" className="btn btn-outline-primary">Purchase Now</button>
             </div> 
            </div>
          </div>
        </div>
      </div>
 */}

    {/*end pricing plan*/}
    {/*client slider */}
      {/* <section className="custom-client-slider text-center">
      <div className="container-fluid">
      <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <h2 className="text-center">Our Clients</h2>
            <p>It is a long established fact that a reader will be distracted by the</p>
            <hr className="below-header-hr-contact"></hr>
   <div id="blogCarousel" class="carousel slide" data-ride="carousel">
                       
                        <div class="carousel-inner">

                            <div class="carousel-item active">
                                <div class="row">                               
                                    <div class="col-md-2 eckcon">
                                       
                                            <img className="img-fluid" src={require('../img/logos/image1.png')} alt="Image"/>
                                           
                                       
                                    </div>
                                    <div class="col-md-2 eckcon">
                                       
                                            <img className="img-fluid" src={require("../img/logos/image2.png")} alt="Image" />
                                          
                                       
                                    </div>
                                    <div class="col-md-2 eckcon">
                                      
                                            <img className="img-fluid" src={require("../img/logos/image3.png")} alt="Image"  />
                                          
                                       
                                    </div>
                                    <div class="col-md-2 eckcon">
                                       
                                            <img className="img-fluid" src={require("../img/logos/image4.png")} alt="Image"  />
                                           
                                       
                                    </div>
                                    <div class="col-md-2 eckcon">
                                       
                                       <img className="img-fluid" src={require("../img/logos/image2.png")} alt="Image" />
                                     
                                  
                               </div>
                               <div class="col-md-2 eckcon">
                                      
                                      <img className="img-fluid" src={require("../img/logos/image3.png")} alt="Image"  />
                                    
                                 
                              </div>
                                    
                                </div>
                               
                            </div>
                           
                            <div class="carousel-item">
                                <div class="row">
                                    <div class="col-md-2 eckcon">
                                       
                                            <img className="img-fluid" src={require("../img/logos/image5.png")} alt="Image"  />
                                           
                                    </div>
                                    <div class="col-md-2 eckcon">
                                    
                                            <img className="img-fluid" src={require("../img/logos/image6.png")} alt="Image" />
                                           
                                       
                                    </div>
                                    <div class="col-md-2 eckcon">
                                      
                                            <img className="img-fluid" src={require("../img/logos/image7.png")} alt="Image"/>
                                           
                                    </div>
                                    <div class="col-md-2 eckcon">
                                       
                                            <img className="img-fluid" src={require("../img/logos/image8.png")} alt="Image"/>
                                           
                                       
                                    </div>
                                    <div class="col-md-2 eckcon">
                                       
                                       <img className="img-fluid" src={require("../img/logos/image5.png")} alt="Image"  />
                                      
                               </div>
                               <div class="col-md-2 eckcon">
                                    
                                    <img className="img-fluid" src={require("../img/logos/image6.png")} alt="Image" />
                                   
                               
                            </div>
                                </div>
                               
                            </div>
                         

                        </div>
                       
                    </div>
   </div>
   </div>
   </div>
      </section> */}
    {/*end client silder */}

          
          </div>
        
      </div>
    )
  }
}
export default Home