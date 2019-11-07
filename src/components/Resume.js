import React, { Component } from 'react';

export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
         <div className="row education">
            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                            <ul style={{color:'#F7F4E9'}}>
                              <li>Passed 2:2 in First Year.</li>
                              <li>Passed 2:1 in Second Year.</li>
                            </ul>

                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Experience</span></h1>
            </div>
            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
         <div className="row skill">
            <div className="three columns header-col">
               <h1><span>Key Skills</span></h1>
            </div>
            <div className="nine columns main-col">
               <p>
               {resumeData.skillsDescription}
             </p>
   				<div className="table">
   				   <ul className="skills">
               <h3>Front-End</h3>
                {
                  resumeData.skills1 && resumeData.skills1.map((item) => {
                    return(
                      <li>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span>{item.skillname}
                      </li>
                    )
                  })
                }
   					</ul>
   				</div>
          <div className="table1">
             <ul className="skills">
               <h3>Back-End</h3>
                {
                  resumeData.skills2 && resumeData.skills2.map((item) => {
                    return(
                      <li>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span>{item.skillname}
                      </li>
                    )
                  })
                }

            </ul>
          </div>
   			</div>
         </div>
      </section>
    );
  }
}
