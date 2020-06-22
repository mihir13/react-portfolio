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
      {/*   <div className="eight columns">
            <form method="POST" netlify action='/pages/success' data-netlify="true" id="contactForm" name="contact">
               <div>
            <label htmlFor="contactName">Name <span className="required">*</span></label>
            <input type="text" size="35" id="contactName" name="contactName" />
               </div>
               <div>
            <label htmlFor="contactEmail">Email <span className="required">*</span></label>
            <input type="email" size="35" id="contactEmail" name="contactEmail" />
               </div>

               <div>
            <label htmlFor="contactSubject">Subject</label>
            <input type="text" size="35" id="contactSubject" name="contactSubject" />
               </div>

               <div>
                  <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                  <textarea cols="10" rows="5" id="contactMessage" name="contactMessage"></textarea>
               </div>
               <div>
                  <button type='submit' className="submit">Submit</button>
                  <span id="image-loader">
                     <img alt="" src="images/loader.gif" />
                  </span>
               </div>
        </form>
      </div> */}
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
