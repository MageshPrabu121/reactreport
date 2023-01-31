import React from 'react';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';  
import { Link } from 'react-router-dom';
import Hero from './Hero';
/*export default  function Connect(){
    return(
      <Section id="connect">
            <div className='content'>
                <div className='title'>
                    <h1><b>Login to your Account</b></h1>
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
                        <Link to="/"><button>Sign In</button></Link>
                        <Link to="/google"><button>Sign up with Google</button></Link>
                        <button><Link to ="/create">Create Account</Link></button>
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
    .title{
      background-color:#e6e6fa;
      width: 80%;
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
    background-color:#e6e6fa;
    padding:0.5rem;
    border-radius:0.5rem;
    .Buttoon{
        padding:2rem;
        padding-top:2rem;
        padding-left:5rem;
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
        font-size: medium;
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
`;*/
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to='/'>
        Ace Adventures
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Connect() {
 
  
  return (
    <Section id="connect">
    <div>
    <div className='imagecontainer_1'>
     <img style={{width:'700px'}}src={"https://res.cloudinary.com/dd7ksmffx/image/upload/v1675182163/designecologist-Pmh0UoG1vlE-unsplash_1_h2rr9k.jpg"  } alt='img'/>
      </div>
    <div className='box_container'>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Avatar sx={{ m: 1, bgcolor: '#a31f96' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login 
          </Typography>
          <Box component="form" onSubmit={Hero} Validate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              type="email"   
            

              label="Enter Email/MobileNumber"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              type="password"
             
            

              label="Password"

              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="secondary" />}
              label="Remember me"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color='error'
              sx={{ mt: 3, mb: 2 ,bgcolor:'#a31f96',width:400 }}><Link to='/'>Sign In</Link>
              
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to='/create'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link variant="body2" to="/create">
                  {"Don't have an account? CREATE ONE"}
                </Link>
              </Grid>
            </Grid>
          </Box>
       </Box>
        {/* </form> */}
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </div>
    </div>
    </Section>
  )
}
const Section= styled.section`

body{
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
body::-webkit-scrollbar {
  display: none;
}
body
{
  scroll-behavior:smooth;
  
}
.box_container{
  width: 500px;
  background: rgb(255, 255, 255) ;
  margin-left: 35%;
  display: flex;
  padding-bottom: 20px;
  position: relative ;
  right: 25em;
  margin-top: 4%;
 overflow: hidden;

}
.imagecontainer_1
{
 
  position: absolute;
  left: 40.5em;
  background-size: cover;
  width: 50%;
}`;
