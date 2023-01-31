import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
export default  function Connect(){
    return(
      <Section id="connect">
            <div className='content'>
                <div className='title'>
                    <h1><b>Login to your Google Account</b></h1>
                </div>
                <div className='login'>
                    <div className='container'>
                        <p >E-mail ID   :</p>
                    </div>
                    <div className='container'>
                        <input  type="text" placeholder="Enter E-mail ID" />
                    </div>
                    <div className='container'>
                        <p >Password   :</p>
                    </div>
                    <div className='container'>
                        <input type="password" placeholder="Enter password" />
                    </div>
                    <div className="Buttoon">
                        <button>Login In</button>
                    </div>
                </div>
            </div>
        </Section>
    )
}
const Section= styled.section`
position:relative;
margin-top:2rem;
.content{
    height:100%;
    width:100%;
    position:absolute;
    top:0;
    z-index:3;
    text-align:center;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    gap:1rem;
        h1{
            color:black;
            border:3px solid black;
            border-radius:40px;
            padding:2rem 2rem;
            font-size:3rem;
            letter-spacing:0.1rem;
        }
    }
    .login{
    padding:0.5rem;
    border-radius:0.5rem;
    .Buttoon{
        padding:2rem;
        padding-top:2rem;
        padding-left:3rem;
        padding-right:3rem;
        text-align:center;
        display:flex;
        gap:3rem;
        button{
          border-radius:20px;
          font-size:1.4rem;
          padding:0.5rem 5rem;
          background-color: black;
          color:white;
          border-radius: 8px;
          cursor: pointer;
          a{
            text-decoration:none;
            color: white;
          }
        }
    }
    .container{
      p{
        font-size:1.4rem;
      }
      input{
        border-radius: 5px;
        font-size: large;
        padding: 5px 15px;
      }
      align-items:center;
      justify-content:center;
      flex-direction:column;
      padding:0 rem;
      input{
        background-color:transparent;
        text-align:center;
        color:black;
        &::placeholder{
          color:grey;
        }
        &:focus{
          outline:none;
        }
      }
    }
}
@media screen and (min-width:280px) and (max-width:980px){
    height:25rem;
    .background{
      img[
        height:100%;
      ]
    }
    .content{
      .title{
        h1{
          font-size:1rem;
        }
        p{
          font-size:0.8rem;
          padding:1vw
        }
      }
      .login{
        flex-direction:column;
        padding:0.8rem;
        gap:0.8rem;
        .container{
          padding:0 0.8rem;
          input[type="date"]{
            padding-left:1rem;
          }
        }
        button{
          padding:1rem;
          font-size:1rem;
        }
      }
      }
    }
`;