import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import './navigation.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  card: {
    maxWidth: 345,
    marginLeft:100,
    
  },
  media: {
    height: 140,
    image: ("/login.png"),
  },
 
}));



export default function Login () {
  const classes = useStyles();

  const [name, setName] = useState("");
  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`Welcome;  ${name}`)
  }


  return (
  <div className="App">
    <form className={classes.container} noValidate autoComplete="off">
   
   
 
   <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/login.png"
          title="login"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            WELCOME
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
          <form onSubmit={handleSubmit}>
              <TextField
               id="outlined-search"
                label="Username"
                type="search"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                value={name}
                onChange={e => setName(e.target.value)}
                />

                <TextField 
                id="outlined-password-input"
                label="Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
                />
                <input class="submit" type="submit" value="Submit" />
            </form>
            </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
    </form>
</div>
  );
}