import React,{Fragment} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import 'react-icons';
const Fragments = styled.section`
.contact{
    padding-top:4rem;
    padding-bottom:2rem;
 }
 .contact-heading{
     display:flex;
     justify-content: center;
     align-items:center;
     padding-bottom:4rem;
     padding-right:2rem;
 }
 .contact-heading h2{
     color:#287ff9;
     font-size:2rem;
     font-weight:600;
     letter-spacing:2px;
     position:relative;
     font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
 }
 .contact-heading h2::before{
     position:absolute;
     top:50%;
     right:-80px;
     content:'';
     width:70px;
     height:2px;
     background:#287ff9;
 }
 .contact-heading h2::after{
     position:absolute;
     top:50%;
     right:-80px;
     content:'';
     width:70px;
     height:2px;
     background:#287ff9;
 }
 .container{
     max-width:1170px;
     padding-left:1rem;
     padding-left:1rem;
     margin:auto;
 }
 .row{
     display:flex;
     flex-wrap:wrap;
 }
 .column{
     flex:0 0 auto;
     width:50%;
 }
 .contact-widget{
     margin-bottom: 40px;
     padding-right:10px;
 }
 .contact-widget-item{
     overflow:hidden;
     margin-bottom:40px;
 }
 .icon{
     height:60px;
     width:60px;
     background:#287ff9;
     border-radius:50%;
     line-height:60px;
     text-align:center;
     margin-right:30px;
     float:left;
 }
 .icon i{
     font-size:24px;
     color:#fff;
     position:absolute;
     top:3px;
 }
 .text{
     overflow:hidden;
 }
 .text h5{
     color:#111;
     font-size:20px;
     font-weight:500;
     margin-bottom:6px;
 }
 .text p{
     font-size:16px;
     font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
     color:#111;
     font-weight:400;
     line-height:28px;
     margin: 0 0 15px 0;
 }
 .contact-form{
     text-align:center;
     margin-bottom:40px;
 }
 form{
     display:block;
     margin-top:0em;
 }
 form input{
     height:46px;
     width:100%;
     padding-left:20px;
     font-size:15px;
     color:#111;
     border: 1px solid #e1e1e1;
     margin-bottom:20px;
     border-radius:4px;
     transition:all,.3s;
 }
 form textarea{
     height:110px;
     width:100%;
     padding-left:20px;
     padding-top:12px;
     font-size:15px;
     color:#111;
     border:1px solid #e1e1e1;
     resize:none;
     margin-bottom:9px;
     border-radius:4px;
     transition: all,.3s;
 }
 form buuton{
     width:100%;
     cursor:pointer;
 }
 button:hover{
     transform:scaleX(1.2);
     background-color:#287ff9;
 }
 .site-btn{
     border:none;
     display:inline-block;
     background:rgpa(255,215,35,.3);
     color:#111;
     font-size:14px;
     font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
     font-weight:500;
     letter-spacing:2px;
     text-transform:uppercase;
     border-radius:50px;
     padding: 12px 40px 10px;
 }
 .map-column{
     flex:0 0 auto;
     width:100%;
 }
 .contact-map iframe{
     width:100%;
 }
 @media screen and (max-width:1200px){
     .container{
         max-width:960px;
     }
 }
 @media screen and (max-width:990px)
 {
     .container{
         max-width:720px;
     }
 }
 @media screen and (max-width:768)
 {
     .container{
         max-width:540px;
     }
     .column{
         width:100%;
     }
 }
 @media (max-width:500px){
     .contact-heading{
         padding-right:0;
     }
     .contact-heading{
         font-size:22px;
     }
     .contact-heading h2::before{
         right:-60px;
         width:50px;
     }
     .contact-heading h2::after{
         left:-60px;
         right:50px;
     }
 }
 
`
const Contact = () =>{
    return(
      <Fragments>
      <section className="contact">
        <div className="contact-heading">
            <h2>Contact Us</h2>
        </div>

        <div className="container">
            <div className="row">
                <div className="column">
                    <div className="contact-widge">
                        <div className="contact-widget-item">
                            <div className="icon">
                                <i class="fa-solid fa-location-dot"></i>
                            </div>
                            <div className="text">
                                <h5>Address</h5>
                                <p>WWGG+FF53,Vivekanadapuram,Kovaipudur,<br/>Sri Krishna College of Technology,<br/>Coimbatore 641105 , Tamil Nadu</p>
                            </div>
                        </div>
                        <div className="contact-widget-item">
                            <div className="icon">
                                <i class="AddIcCallIcon"></i>
                            </div>
                            <div className="text">
                                <h5>Phone-Number</h5>
                                <p>+144-765-9475</p>
                            </div>
                        </div>
                        <div className="contact-widget-item">
                            <div className="icon">
                                <i ></i>
                            </div>
                            <div className="text">
                                <h5>mailid</h5>
                                <p>aceadventue@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="contact form">
                        <form action="#">
                            <input type="text" placeholder='Name'/>
                            <input type="email" placeholder="Email"/>
                            <textarea placeholder='Comment'></textarea>
                            <Link to="/testimonial"><button type='submit' className='site-btn'>Send Message</button></Link>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="map-column">
                    <div className="contact-map">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.4729580640533!2d76.92576747776013!3d10.927601458044764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b823c4ca3d5%3A0x23416a992879b7c4!2sSri%20Krishna%20College%20Of%20Technology!5e0!3m2!1sen!2sin!4v1670779821214!5m2!1sen!2sin"
                        width="100%"
                         height="450"
                        style={{border:0}} 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                      </iframe>
                    </div>
                </div>
            </div>
        </div>
      </section>
      </Fragments>
    )
}

export default Contact;
