import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { deleteMovie } from "../redux/actions/moviesAction";

const CardMovies = (props) => {
    const dispatch=useDispatch()


  return (
    <div >
    <Card sx={{ maxWidth: 345, margin: 5 }} >
      <CardActionArea>
        <CardMedia 
          component="img"
          height="300"
          width="300"
          image={props.img} 
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span> description : {props.description}</span> <br />
            <span> rating : {props.rating}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/movies/${props.id}`}>
          <Button size="small" color="primary">
            {props.btnText}
          </Button>
          
        </Link>
        
          <button  style={{background: "linear-gradient(to right,red,white)" , borderRadius:"25px"}}  onClick={()=> dispatch(deleteMovie(props.id))}> <p style={{fontFamily:"arial", fontSize: 15}}>dlete movie</p> </button>
      </CardActions>
    </Card>
    </div>
  );
};

export default CardMovies;