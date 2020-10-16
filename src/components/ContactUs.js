import React, { Component } from 'react';


export default class ContactUs extends Component {
  render() {
    return (
      <section id="contact">
      <div className="row section-head">
         <div className="two columns header-col">
            <h2><span></span></h2>
         </div>

         <div className="ten columns">
           <h1>Get In Touch</h1>
               <p className="lead">Please feel free to contact me on my email below.</p>
         </div>
      </div>
      <div className="card-body row">
      
          <div class='col-6 mx-auto'>
            <form action="https://formspree.io/f/xoqperrl" method="POST">
              <div class="form-group">
                <label>Name</label>
                <input class='form-control' type="text" name="name">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label>Email</label>
                <input class='form-control' type="email" name="_replyto">
              </div>
              <div class="form-group">
                <label>Email</label>
               <textarea class='form-control' name="message" placeholder="Type your message" required></textarea>
              </div>
              <div class="form-group">
                <label>Email</label>
               <input class='form-control' type="submit" value="Send">
              </div>
            </form>
          </div>
      
         <div className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h3>Email Address</h3>
            <p className="address">
            <a href="mailto:mihirt13@yahoo.com">mihirt13@yahoo.com</a>
            </p>
          </div>
        </div>
   </div>

</section>
        );
  }
}
