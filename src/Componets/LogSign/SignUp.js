import React,{ useState }  from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {  auth, createUserWithEmailAndPassword, doc, setDoc, db } from '../../firebase';
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';



const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
      },
      image: {
        backgroundImage: 'url(https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
          theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '90%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [fname, setfname] = useState('');
//   const [ffname, setffname] = useState('');
var fname;
var ffname;

var email;
var password;


function setfname (event){
    fname = event.target.value;
     // console.log(name1)
   }

function setffname (event){
    ffname = event.target.value;
  // console.log(name1)
}
function setEmail (event){
  email = event.target.value;
  // console.log(email)
}
function setPassword (event){
  password = event.target.value;
  // console.log(pass)

}

let history = useHistory();

    const submit = async () => {

        
            let {user} = await createUserWithEmailAndPassword(auth, email, password)
                
            let userRef = doc(db, 'admins', user.uid)
            await setDoc(userRef,{
                email: email,
                pass: password,
                fname: fname,
                ffname: ffname

            })
           
            swal({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
            }).then((value) => {
                // localStorage.setItem("userInfo",JSON.stringify(auth.currentUser) )
                    history.push("/")
    
            
    })            
          
     
    }



  return (
    <Grid container component="main" className={classes.root}>
    <CssBaseline />
    <Grid item xs={false} sm={4} md={7} className={classes.image} />
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <div className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                // value={fname}

                onChange={setfname} 
                             />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                // value={ffname}

                onChange={setffname} 

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                // value={email}

                onChange={setEmail} 
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                // value={password}

                onChange={setPassword} 

              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
            <Link to="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
      </Grid>

      </Grid>
  );
}