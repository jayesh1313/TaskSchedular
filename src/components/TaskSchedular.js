import React from 'react'
import '../stylesheets/TaskSchedular.css';
export default function TaskSchedular() {
  return (
    <div>
      <div className="container-fluid">
  <div className="row color">
    <div className="col-sm-12">
      <div className="d-flex justify-content-between header align-items-center">
        <div className="logo">
          
          <b>Vicky Tamta</b>
        </div>
        <div className="user-info">
          <i className="fas fa-bell user-info-alignment"></i>
          <i className="fas fa-paperclip user-info-alignment"></i>
          <i className="fas fa-search user-info-alignment"></i>
          <i className="fas fa-user user-info-alignment"></i>
          
           <img src="https://brandmark.io/logo-rank/random/pepsi.png" width="30" height="30"/>
        </div>
        </div>
    </div>
    <div className="col-sm-3 side-nav">
        <div className="image text-center">
          <i className="fas fa-ellipsis-v ellipsis-alignment"></i>
          <div className="online"></div>
      <img src="https://brandmark.io/logo-rank/random/pepsi.png" width="100" height="100"/>
          
      <div >Vicky Tamta</div>
     </div>
  
      <ul className="nav flex-column">
      
       <li className="nav-item">
        
    <a className="nav-link"><i className="fas fa-home side-nav-icons"></i>Home</a>
  </li>
       <li className="nav-item active">
    <a className="nav-link"><i className="fas fa-tachometer-alt side-nav-icons"></i>Dashboard <i className="fas fa-chevron-right chevron-right-alignmment"></i></a>
  </li>
       <li className="nav-item">
    <a className="nav-link"><i className="fas fa-chart-pie side-nav-icons"></i>Chart</a>
  </li>
       <li className="nav-item">
    <a className="nav-link"><i className="fas fa-calendar-check side-nav-icons"></i>Events</a>
  </li>
       <li className="nav-item">
    <a className="nav-link"><i className="fas fa-comment side-nav-icons"></i>Chat</a>
  </li>
       <li className="nav-item">
    <a className="nav-link"><i className="fas fa-map-marker-alt side-nav-icons"></i>Maps</a>
  </li>
       <li className="nav-item">
    <a className="nav-link"><i className="fas fa-user-tag side-nav-icons"></i>Authentication</a>
  </li>
       <li className="nav-item">
    <a className="nav-link"><i className="fas fa-cog side-nav-icons"></i>Setting</a>
  </li>
     </ul>
    </div>
    <div className="col-sm-9 main-section ">
      <div className="section-header d-flex align-items-center" id="date">   
      </div>
      <div className="grid">
    
        <div className="row">
          <div className="col-sm-2">
            <div className="schedular-height schedular-alignment">10:00 AM</div>
          </div>
             <div className="col-sm-10">
                         
          </div>
          </div>
               
        <div className="row">
          <div className="col-sm-2">
            <div className="schedular-height schedular-alignment">10:30 AM</div>
          </div>
          <div className="col-sm-10">
            <div className="row schedular-alignment">
              <div className="col-sm-4">
            <div className="schedular-height first-schedule justify-content-center">Yoga</div>
                </div>
                </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-sm-2">
             <div className="schedular-height schedular-alignment">11:00 AM</div>
          </div>
          <div className="col-sm-10">
            <div className="row schedular-alignment">
              <div className="col-sm-4">
            <div className=" schedular-height first-schedule justify-content-center">Aman and Dimple Interview</div>
                </div>
              <div className="col-sm-4">
            <div className="second-schedule schedular-height justify-content-center">Suraj and Shivani Interview</div>
                </div>
              <div className="col-sm-4">
            <div className="third-schedule schedular-height justify-content-center">Indian Cafe House Event</div>
                </div>
                </div>
          </div>
        </div>
            
           <div className="row">
             <div className="col-sm-2">
                <div className="schedular-height schedular-alignment">12:00 PM</div>
             </div>
             <div className="col-sm-10">
              
             </div>
        </div>
        
        <div className="row">
          <div className="col-sm-2">
            <div className="schedular-height schedular-alignment">12:30 PM</div>
          </div>
          <div className="col-sm-10">
            <div className="row schedular-alignment">
              <div className="col-sm-4">
            <div className=" schedular-height first-schedule justify-content-center">HR Meeting</div>
                </div>
              <div className="col-sm-4">
            <div className="second-schedule schedular-height justify-content-center">Townhall</div>
                </div>
              
                </div>
          </div>
        </div>
           
            <div className="row">
              <div className="col-sm-2">
                <div className="schedular-height schedular-alignment">01:00 PM</div>
              </div>
              <div className="col-sm-10">
                
              </div>
        </div>
        
        <div className="row">
          <div className="col-sm-2">
              <div className="schedular-height schedular-alignment">02:00 PM</div>
          </div>
          <div className="col-sm-10">
            <div className="row schedular-alignment">
              <div className="col-sm-4">
            <div className=" schedular-height first-schedule justify-content-center">Break</div>
                </div>
              <div className="col-sm-4">
            <div className="second-schedule schedular-height justify-content-center">QNA Session</div>
                </div>
              <div className="col-sm-4">
            <div className="third-schedule schedular-height justify-content-center">Team Meeting</div>
                </div>
                </div>
          </div>
        </div>
            
        <div className="row">
          <div className="col-sm-2">
            <div className="schedular-height schedular-alignment">04:00 PM</div>
          </div>
          <div className="col-sm-10">
            <div className="row schedular-alignment">
              <div className="col-sm-4">
            <div className="schedular-height first-schedule justify-content-center">Fresher's Intro</div>
                </div>
              <div className="col-sm-4">
            <div className="second-schedule schedular-height justify-content-center">Fresher's QNA</div>
                </div>
              <div className="col-sm-4"> 
            <div className="third-schedule schedular-height justify-content-center">HR policy</div>
                </div>
                </div>
          </div>
        </div>
          
            
          </div>
         
            
            
            
            
            
            
            
            </div>
        </div>
      </div>

    </div>
  )
}
