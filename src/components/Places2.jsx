import * as React from 'react';
import { Link } from 'react-router-dom';
import styled  from 'styled-components';
import { data } from "./places3";
export default function About1(){
  const {menu,onAdd} = data;
  console.log(menu);
return (
  <Section>
  <div class="food-area">
  <div class="container">
    <div class="title">
      <h4><i style={{fontSize:'1.2em'}} class="fa-solid fa-utensils"></i> &nbsp;Best Selling Holidays</h4>
      <p><i>CHECK OUT OUR MOST POPULAR HOLIDAYS RIGHT HERE!</i></p>

 
      <div class="foods">
        {menu.map((menu, id) => {
          
          return (
            <div key={id} class="singlefood">
              <div class="food-img">
                <img
                  src={menu.img}
                  alt="food"
                  height="230px"
                  width="350px"
                />
                <h4>{menu.name}</h4>
              </div>

              <ul class="food-list">
                <li>{menu.name}</li>
                <li>{menu.price}</li>
              </ul>
              <div className="but">
              </div>
              <div className="pos">
              <Link to="/payment"><button>Add Package</button></Link>
            </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</div>
</Section>
)
};
const Section = styled.section
`

.food-area {
  background-color: #87CEEB;
  padding: 100px 0;
}
.container {
  width: 1170px;
  margin: 0 auto;
}
.title {
  text-align: center;
  margin-bottom: 60px;
}
.title p {
  font-size: 25px;
}
.title h4 {
text-transform: uppercase;
font-size: 40px;
margin-top: 5px;
margin-bottom: 30px;
}

.foods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.singlefood {
  background-color: rgb(255, 255, 255);
  border: 2px solid rgb(214, 208, 208);
  border-radius: 12px;
  margin-bottom: 30px;
  overflow: hidden;
  flex-basis: 30%;
  /* z-index: -1; */
}
.food-img {
  position: relative;
  height: 220px;
  overflow: hidden;
  width: 100%;
}
.food-img img {
  border-radius: 12px 12px 12px 12px ;
  transition: .3s;
}
.food-img h4 {
  position: absolute;
  left: 0;
  top: -60px;
  background-color: #1307F4;
  color: #fff;
  text-transform: capitalize;
  padding: 10px 20px;
  font-size: 22px;
  font-weight: 600;
  transition: .3s;
}
.singlefood:hover .food-img h4 {
  top: 0;
}
.singlefood:hover img {
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
  border-bottom: 1px dashed rgb(18, 17, 17);
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
.pos a
{
  text-decoration:none;
}
.pos button {
  text-decoration: rgb(249, 250, 249);
  background-color: #4806AA;
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  font-weight: 600;
  display: block;
  padding: 10px 20px;
  width: 160px;
  margin: 20px auto 25px auto;
  border-radius: 20px;
  transition: .1s;
}
.pos button:hover {
  background-color: #1307F4;
  transform: scale(1.1);
}
.pos:hover{
  transform: scale(1.1);
}
.singlefood:hover{
  transform: scale(1.1);
}
.but button {
  text-decoration: rgb(249, 250, 249);
  background-color: #fefdfc;
  color: rgb(32, 30, 30);
  text-transform: uppercase;
  font-weight: 600;
  width: 30px;
  margin: 25px auto 25px auto;
  border-radius: 8px;
  transition: .1s; 
  font-size: larger;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: -20px;
  margin-top: -20px;
  
  /* padding: 5px 15px; */
  
  /* display: block;
  */
}
.but button:hover {
  background-color: rgb(41, 189, 110);
  transform: scale(1.1);
}
.but:hover{
  transform: scale(1.1);
}
.fle{
  display: flex;
}


@media only screen and (min-width:992px) and (max-width:1170px) {
.container{
    width: 970px;
}
}

@media only screen and (min-width:768px) and (max-width:991px) {
.container{
  flex-direction: column;
    width: 750px;
}
.single-food{
    flex-basis: 49%;
}
}

@media only screen and (max-width:767px) {
.container{
    width: 350px;
}
.single-food{
    flex-basis: 100%;
}
}
.row {
display: flex;
justify-content: space-between;
}
.row.center {
align-items: center;
}
.col-1 {
flex: 1;
}
.col-2 {
flex: 2;
}
`