import React, { Component } from 'react';


export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h2>Some of my Recent Projects</h2>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item, i)=>{
              return(
                <div className="columns portfolio-item" key={i}>
                  <div className="item-wrap">
                    <a href={`${item.modal}`}>
                      <img src={`${item.imgurl}`} className="item-img" alt=""/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h4>{item.name}</h4>
                          <p>Click to View</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
          {/* Modal Popup*/}
          <div id="modal-wrapper">
            {
              resumeData.portfolio && resumeData.portfolio.map((item, i)=>{
                return(
                  <div id={item.id} className="popup-modal mfp-hide" key={i}>
                    <img className="scale-with-grid" src={`${item.imgurl}`} alt="" />
                    <div className="description-box">
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                      <span className="categories"><i className="fa fa-tag"></i>{item.tag}</span>
                    </div>
                    <div className="link-box">
                      <a href={`${item.url}`}>Details</a>
                      <a href="" className="popup-modal-dismiss">Close</a>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
  </section>
        );
  }
}
