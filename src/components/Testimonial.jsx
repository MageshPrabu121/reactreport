import React from 'react';
import styled from 'styled-components';
export default function Testimonial(){
  return(
    <Trail id="..">
     <div className="Common">
       <h1 className='Head'>Travel Questions and Answers</h1>
       <p className='Para1'>“Good Apps are hard to find. <br></br>If your Appy and you know it, share, review!”</p>
     <h1 className='bbottom'> </h1>
     <h5 className='Colorsubhead1'>"Q"</h5>
     <h5 className='Subhead1'> Promoth</h5>  
     <h5 className='Colorsubhead2'> yesterday</h5>
     <p className='Para2'><b>United Kingdom:How much is an MOT test for a Mini Cooper</b><br></br><b>Hatchback car</b></p>
     <p className='Subpara1'>View 1 answer</p>
     
     
     <h5 className='Colorsubhead3'>"Q"</h5>
     <h5 className='Subhead2'> Manas</h5>
     <h5 className='Colorsubhead4'> Saturday</h5>
     <p className='Para3'><b>Ellendale(Delaware) to San Francisco: What to expect</b><br></br><b>I'm travelling w.My dog</b></p>
     <p className='Subpara2'>View 2 answer</p>
     
     
     <h4 className='Head2'><b>Commenting As,</b></h4>
     <img className='comm' src='https://res.cloudinary.com/dd7ksmffx/image/upload/v1670766600/20221119_160930_idg11z.png' alt='' height={50} width={50}></img>
     <h5 className='comm1'><b>727821TUCS121MAGESHPRABU G</b></h5>
     <p className='comm2'><b>@i_magesh_</b></p>


    
     <img className='imgpromoth' src="https://res.cloudinary.com/dd7ksmffx/image/upload/v1670430533/pngfind_zw8hgt.png" alt='' height={50} width={50}></img>
     <img className='imgmanas' src="https://res.cloudinary.com/dd7ksmffx/image/upload/v1670431156/WhatsApp_Image_2022-11-26_at_10_pwh5wm.png" alt='' height={50} width={50}></img>
     <input type="text" className='textbox' placeholder=' Add a comment...'></input>
    <button className='button1'><b>Submit</b></button>
    <p className='bottom'><b>By completing this action you are creating and agree to YouTube's Trems of Service.</b></p>
     <h3 className='bottompro'><b>About</b></h3>
     <h3 className='bottompromax'><b>Us</b></h3>
     </div>
     </Trail>
  )
}
const Trail = styled.section`
postion:relative;
.App {
    text-align: center;
  }
  
  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }
  .Common{
    
    background-color: white;
      background-repeat: no-repeat;
      background-size: cover;
     
  }    
  
  
  .bottom{
    position: absolute;
    left: 6%;
    top: 107.5%;
    font-size: smaller;
  }
  .bottompro{
    position: absolute;
    left: 6%;
    top: 110%;
    font-size: medium;
  }
  .bottompromax{
    position: absolute;
    left: 9.9%;
    top: 110%;
    font-size: medium;
    color: red;
  }
  .Para2{
    position:absolute;
    top:44%;
    left: 10%;
    
  }
  .button1{
    position: absolute;
    font-size: 14px;
    left: 62.4%;
    top: 100.5%;
    height: 5%;
    border-radius: 5px;
    background-color: rgb(43, 150, 16);
    color: white;
  }
  .Common button:hover
  {
    transform: scale(1.1);
  }
  .textbox{
    position: absolute;
    left: 14%;
    top: 100.5%;
    height: 5%;
    width: 45%;
    border-radius: 10px;
  }
  .comm1{
    position: absolute;
    left: 11%;
    top: 88.5%;
    font-size: medium;
  }
  .comm2{
    position: absolute;
    left: 11%;
    top:93%;
    color: blue;
  }
  .addcomm1{
    position: absolute;
    left: 22%;
    top:85%;
    color: grey;
  }
  .imgpromoth{
    position: absolute;
    left: 4.5%;
    top: 39.5%;
  }
  .imgmanas{
    position: absolute;
    left: 4.5%;
    top: 65.5%;
  }
  .Subpara1{
    color: grey;
    position: absolute;
    top:52%;
    left:10%;
    cursor: pointer;
  }
  .Colorsubhead1{
    position: absolute;
    font-style: italic;
    color: red;
    left: 9.5%;
    top:36%;
  }
  .Subhead1{
    position: absolute;
    font-style: normal;
    left: 12%;
    top:36%;
  }
  .Colorsubhead2{
    position: absolute;
    font-style: italic;
    color: grey;
    top: 36%;
    left: 16.7%;
  }
  .Colorsubhead3{
    position: absolute;
    left: 9.5%;
    top: 61%;
    color: red;
  }
  .Subhead2{
    position: absolute;
    font-style: normal;
    left: 12%;
    top: 61%;
  }
  .Colorsubhead4{
    position: absolute;
    font-style: italic;
    color: gray;
    left: 15.9%;
    top:61%
  }
  .Head2{
    position: absolute;
    font-family:Arial, Helvetica, sans-serif;
    top: 83%;
    left: 5%;
    font-size: 110%;
  }
  .comm{
    position: absolute;
    left: 5.3%;
    top: 92.5%;
  }
  .Para3{
    position:absolute;
    top:68%;
    left: 10%;
  }
  
  .Subpara2{
    color: grey;
    position: absolute;
    top:75%;
    left:10%;
    cursor: pointer;
  }
  .Head{
    position: absolute;
    left: 8%;
    top: 9%;
    font-size: 30px;
    color: black;
    font-family: 'Brush Script MT', cursive;
 
  }
  
  
  .Para1{
    position: absolute;
    top: 20%;
    left: 8%;
    font-size: 20px;
    color: rgb(202, 27, 56);
    font-family: Copperplate, Papyrus, fantasy;
  }
  .bbottom{
    position:absolute;
    margin-top: 4.6%;
    border-bottom: 3px solid black;
    width: 32.5%;
    left: 8.4%;
  }

  
  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }
  
  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
  
  .App-link {
    color: #61dafb;
  }
  
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }`