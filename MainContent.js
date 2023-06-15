import React from 'react';
import  './MainContent.css';

function MainContent() {
  return (
    <div>
        <h1>Female Models</h1>
      <div className="models">
        <div className="row">
            <div className="img fbox">
              <div className='layer'>
            <p >
                Name: Caroline<br/>
                Age: 28<br/>
                Height: 5.8<br/>
                Burst: 34<br/>
                High Waist: 26 <br/>
                Low Waist: 34<br/><br />
                <a href="#">View Profile</a>
              </p>
              </div>
            </div>
         </div> 
        <div className="row">
           <div className="img fbox1">
            <div className='layer'>
           <p >
                Name:  Kathrine <br/>
                Age: 28<br/>
                Height: 5.8<br/>
                Burst: 34<br/>
                High Waist: 26 <br/>
                Low Waist: 34<br/><br />
                <a href="#">View Profile</a>
              </p>
              </div>
           </div>
           </div>
        </div>

      
      

      
       <h1>Male Models</h1>
      <div className="models">
        <div className="row">
          <div className="img mbox">
            <div className='layer'>
              <p>
                Name: Damon <br/>
                Age: 28<br/>
                Height: 5.8<br/>
                Burst: 38<br/>
                High Waist: 26 <br/>
                Low Waist: 34<br/><br />
                <a href="#">View Profile</a>
              </p>
              </div>
          </div>
        </div>
        <div className="row">
          <div className="img mbox1">
            <div className="layer">
          <p >
                Name: Klaus <br/>
                Age: 28<br/>
                Height: 5.8<br/>
                Burst: 38<br/>
                High Waist: 26 <br/>
                Low Waist: 34<br/><br/>
                <a href="#">View Profile</a>
              </p>
              </div>
          </div>
        </div>
        </div> 
</div>
    
  )
}

export default MainContent;


 


