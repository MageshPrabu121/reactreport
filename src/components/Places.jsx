import * as React from 'react';
import { Link } from 'react-router-dom';
import styled  from 'styled-components';
const About = () =>{
    return(
        <Section id="places">
        <div className="testo">
            <div className='serach'><input type="text" placeholder="Search Places.."></input></div>
                    <h1 className='h11'>ACE ADVENTURES</h1>
                    <p className='h22'><b>Best Selling Holidays</b></p>     
                  <p className='h33'><i>CHECK OUT OUR MOST POPULAR HOLIDAYS RIGHT HERE!</i></p> 
<div className='container'>
<div class="foods">
                    <div class="all1">
                   
                        <div class="all2">
                            <img src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1670308721/wp9160943-nature-dark-4k-wallpapers_anokmu.jpg" height={200} width={350}/>
                            <Link to ="/payment"><h4>ALLEPPEY</h4></Link>
                        </div>
                    </div> 
                    <div className='pop1'><button>3N/4D</button></div>
                    <div className='pop2'><button>4N/5D</button></div>
                    <div className='pop3'><button>6N/7D</button></div>
                    <div className='pop4'><button>8N/9D</button></div>
                    <div className='pop5'><button>9N/10D</button></div>
                    <div class="all3">
                        <div class="all4">
                            <img src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1670312105/wall2_zhaeja.jpg" height={200} width={350}/>
                            <Link to ="/payment"><h4>VIETNAM</h4></Link>
                        </div>
                    </div> 
                    <div class="all5">
                        <div class="all6">
                            <img src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1670312105/wall3_qepbxz.jpg" height={200} width={350}/>
                            <Link to ="/payment"><h4>Dreamy Mauritius</h4></Link>
                        </div>
                    </div> 
                    <h1 className='koodu'> </h1>
                    <div class="all7">
                        <div class="all8">
                            <img src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1670341512/effel_mqh7jw.jpg" height={200} width={350}/>
                            <h4>EIFFEL TOWER</h4>
                        </div>
                    </div> 
                    <div class="all9">
                        <div class="all10">
                            <img src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1670341549/taaj_xulxw5.jpg" height={200} width={350}/>
                            <h4>TAJ MAHAL</h4>
                        </div>
                    </div>
                    </div> 
<div className='machan2'></div>
<div className='para2'><p>37,065/- per person</p></div>
<div className='para1'><p>25,522/- per person</p></div>
<div className='para3'><p>1,18,522/- per person</p></div>
</div>
<div className='budg'>
<select name="dept">
                <option>50K</option>
                <option>30K</option>
                <option>20K</option>
                <option>10K</option>
                <option selected>BUDGET</option>
            </select>
</div>
<div className='quote'><p>Calming sounds of the ocean, charming beach shacks and endless nights!</p></div>
</div>   
</Section>
    )
}

const Section =styled.section`
position:relative;
body{
  bac
}
  .pop4
  {
    position : absolute;
    left:300px;
    top:700px;
  }
  .pop5
  {
    position : absolute;
    left:890px;
    top:700px;
  }
  .budg
  {
    position: absolute;
    left: 650px;
    top: 15px;
  }
  .budg select{
  border-radius: 15px;
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
  }
  
  
  .testo
  {
    background-color:#f5f5f5;
    padding: 20px;
    position: relative;
  
  }
  .h11
  {
   text-align: right;
   font-size: 30px;
   position: relative;
   top: -70px;
  }
  .machan
  {
    position: absolute;
    bottom: 450px;
    left: 1000px;
  }
  .h22
  {
    text-align: left;
    position: relative;
    top: -140px;
    font-size: 30px;
  }
  .h33
  {
    text-align: left;
    position: relative;
    top: -160px;
    font-size: 15px;
  }
  .h11 h1:hover{
    transform: scale(1.);
  }
  
  .foods {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    justify-content: space-evenly;
  }
  .all1 {
    background-color: rgb(255, 255, 255);
    border: 2px solid rgb(214, 208, 208);
    border-radius: 12px;
    margin-bottom: 30px;
    overflow: hidden;
    flex-basis: 30%;
  }
  .pop1
  {
    position: absolute;
    left: 50px;
    bottom: 10px;
  }
  .para1
  {
    position: absolute;
    left: 160px;
    bottom: 250px;
  }
  .para2
  {
    position: absolute;
    left: 950px;
    bottom: 248px;
  }
  .para3
  {
    position: absolute;
    left: 590px;
    bottom: 248px;
  }
  .pop1
  {
    position: absolute;
    left: 88px;
    bottom: 264px;
  }
  .pop2
  {
    position: absolute;
    left: 540px;
    bottom: 260px;
  }
  .pop3
  {
    position: absolute;
    left: 900px;
    bottom: 260px;
  }
  .all3 {
    background-color: rgb(255, 255, 255);
    border: 2px solid rgb(214, 208, 208);
    border-radius: 12px;
    margin-bottom: 30px;
    overflow: hidden;
    flex-basis: 30%;
  } 
  .all5 {
    background-color: rgb(255, 255, 255);
    border: 2px solid rgb(214, 208, 208);
    border-radius: 12px;
    margin-bottom: 30px;
    overflow: hidden;
    flex-basis: 30%;
  }
  .all7 {
    background-color: rgb(255, 255, 255);
    border: 2px solid rgb(214, 208, 208);
    border-radius: 12px;
    margin-bottom: 30px;
    overflow: hidden;
    flex-basis: 30%;
  }
  .all9 {
    background-color: rgb(255, 255, 255);
    border: 2px solid rgb(214, 208, 208);
    border-radius: 12px;
    margin-bottom: 30px;
    overflow: hidden;
    flex-basis: 30%;
  }
  .h44
  {
    position: relative;
    left: -580px;
  }
  .budg select
  {
    position: absolute;
    top: 150px;
    left: 20px;
    font-size: 20px;
    background-color:#9399f5;
  }
  .serach input[type="text"]
  {
    position:relative;
    top: 30px;
    font-size:20px;
    padding: 10px ;
    left:580px;
    border-radius: 80px;
  }
  
  .h55
  {
    position: relative;
    left: -470px;
    top: -38px;
  }
  .all2 {
    position: relative;
    height: 200px;
    overflow: hidden;
    width: 100%;
  }
  .all4 {
    position: relative;
    height: 200px;
    overflow: hidden;
    width: 100%;
  }
  .all6 {
    position: relative;
    height: 200px;
    overflow: hidden;
    width: 100%;
  }
  .all2 img {
    border-radius: 12px 12px 12px 12px ;
    transition: .3s;
  }
  .all4 img {
    border-radius: 12px 12px 12px 12px ;
    transition: .3s;
  }
  .all6 img {
    border-radius: 12px 12px 12px 12px ;
    transition: .3s;
  }
  .all8 img {
    border-radius: 12px 12px 12px 12px ;
    transition: .3s;
  }
  .all10 img {
    border-radius: 12px 12px 12px 12px ;
    transition: .3s;
  }
  .all2 h4 {
    position: absolute;
    left:-10px;
    top: -30px;
    color: #fff;
    text-transform: capitalize;
    padding: 10px 20px;
    font-size: 22px;
    font-weight: 600;
    transition: .3s;
    border-radius:5px;
    background-color:#0D08FD;
  }
  .all4 h4 {
    position: absolute;
    left: 0;
    top: -30px;
    background-color:#0D08FD;
    color: #fff;
    text-transform: capitalize;
    padding: 10px 20px;
    font-size: 22px;
    font-weight: 600;
    transition: .3s;
    border-radius:5px;
  }
  .all6 h4 {
    position: absolute;
    border-radius:5px;
    left: 0;
    top: -30px;
    background-color:#0D08FD;
    color: #fff;
    text-transform: capitalize;
    padding: 10px 20px;
    font-size: 22px;
    font-weight: 600;
    transition: .3s;
  }
  .all8 h4 {
    position: absolute;
    left: 200px;
    top: 468px;
    border-radius:5px;
    background-color:#0D08FD;
    color: #fff;
    text-transform: capitalize;
    padding: 10px 20px;
    font-size: 22px;
    font-weight: 600;
    transition: .3s;
  }
  .all10 h4 {
    position: absolute;
    border-radius: 60px; border-radius:5px;
    background-color:#0D08FD;
    top: 468px;
    left: 700px;
    color: #fff;
    text-transform: capitalize;
    padding: 10px 20px;
    font-size: 22px;
    font-weight: 600;
    transition: .3s;
  }
   .all1:hover .food-img h4 {
    top: 0;
  }
   .all3:hover .food-img h4 {
    top: 0;
  }
   .all5:hover .food-img h4 {
    top: 0;
   }
   .all7:hover .food-img h4 {
    top: 0;
   }
   .all9:hover .food-img h4 {
    top: 0;
  }
  .all1:hover img {
  transform: scale(1.2) rotate(3deg);
  }
  .all3:hover img {
  transform: scale(1.2) rotate(3deg);
  }
  .all5:hover img {
  transform: scale(1.2) rotate(3deg);
  }
  .all7:hover img {
  transform: scale(1.2) rotate(3deg);
  }
  .all9:hover img {
  transform: scale(1.2) rotate(3deg);
  }
  
  .food-list {
    padding: 20px;
    list-style: none;
  }
  .food-list li {
    font-weight: 400;
    font-size: 18px;
    
    justify-content: space-between;
    border-bottom: 1px dashed #ddd;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  .food-list li:last-child {
    border-bottom: 0;
    margin-bottom: 0;
    padding-bottom: 0;
    font-size: 25px;
    font-weight: 600;
  }
  .all1 a {
    text-decoration: rgb(249, 250, 249);
    background-color: #ff7720;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    font-weight: 600;
    display: block;
    padding: 10px 20px;
    width: 160px;
    margin: 20px auto 25px auto;
    border-radius: 20px;
    transition: 0.1s;
  }
  .all3 a {
    text-decoration: rgb(249, 250, 249);
    background-color: #ff7720;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    font-weight: 600;
    display: block;
    padding: 10px 20px;
    width: 160px;
    margin: 20px auto 25px auto;
    border-radius: 20px;
    transition: 0.1s;
  }
  .all5 a {
    text-decoration: rgb(249, 250, 249);
    background-color: #ff7720;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    font-weight: 600;
    display: block;
    padding: 10px 20px;
    width: 160px;
    margin: 20px auto 25px auto;
    border-radius: 20px;
    transition: 0.1s;
  }
  .all7 a {
    text-decoration: rgb(249, 250, 249);
    background-color: #ff7720;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    font-weight: 600;
    display: block;
    padding: 10px 20px;
    width: 160px;
    margin: 20px auto 25px auto;
    border-radius: 20px;
    transition: 0.1s;
  }
  .all9 a {
    text-decoration: rgb(249, 250, 249);
    background-color: #ff7720;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    font-weight: 600;
    display: block;
    padding: 10px 20px;
    width: 160px;
    margin: 20px auto 25px auto;
    border-radius: 20px;
    transition: 0.1s;
  }
  .all1 a:hover {
    background-color: rgb(41, 189, 110);
  }
  .all3 a:hover {
    background-color: rgb(41, 189, 110);
  }
  .all5 a:hover {
    background-color: rgb(41, 189, 110);
  }
  .all7 a:hover {
    background-color: rgb(41, 189, 110);
  }
  .all9 a:hover {
    background-color: rgb(41, 189, 110);
  }
  .all1:hover{
    transform: scale(1.1);
  }
  .all3:hover{
    transform: scale(1.1);
  }
  .all5:hover{
    transform: scale(1.1);
  }
  .all7:hover{
    transform: scale(1.1);
  }
  .all9:hover{
    transform: scale(1.1);
  }
  .machan2
  {
    position: absolute;
    left: 1100px;
    top:13px;
  }
  .quote
  {
    position: absolute;
    top: 100px;
    left: 485px;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-style: italic;
  }
  .koodu
  {
    border-bottom: 5px solid rgb(0, 0, 0);
    margin-top: 30px;
  }
 
`
export default About;