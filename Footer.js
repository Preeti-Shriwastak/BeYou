import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div>
      <footer>
        {/* <div className="about-detail"> */}
          <div className="title">
             <h3>--Your Career of The Model--</h3> 
           </div>
        {/* </div> */}

        {/* <div className="abt-det"> */}
        <div className='detail'>
          <div className="det">
              <h5>Contact-Us</h5>
            <div className="det1">
                <i class="fa-solid fa-phone">  </i>
                <p>08912934561</p>  
                <i class= "fa-solid fa-envelope"></i>
                <p>beyou123@gmail.com</p>
            </div>       
           </div>

          <div className="det">
             <h5>Address</h5>
             
             <div className="det1">
                <i class="fa-solid fa-house"></i>
                <p>Bangalore, India <br /> Yelahanka 560064</p>
              </div>
          </div>
          <div className="det">
            <h5>About-Us</h5>
            <div className="det1">
              <p>You can make future bright with us.</p>
              <a href="#">Click to know</a>
            </div>
          </div>

          <div className="det">
             <h5>Policy</h5>
            <div className="det1">
              <p>Refund Policy</p>
              <p>Payment Policy</p>
              <p>Privacy</p>

            </div>
          </div>
          </div>
        {/* </div> */}

        

        <div className="media-icon">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-square-twitter"></i>
            <i class="fa-brands fa-square-youtube"></i>
        </div>
        <div className="footer-page">
            {/* <div> */}
              <h6>© 2020 Copyright: BeYou</h6>
            {/* </div> */}
        </div>
        
      </footer>
    </div>
    
  )
}

export default Footer;
