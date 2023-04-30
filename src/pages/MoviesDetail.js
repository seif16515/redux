import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MoviesDetails = () => {
  const { id } = useParams();

  const movieDetail = useSelector((state) => state.moviesReducer.movies);
  const seeDetails = movieDetail.find((movie) => movie.id === +id);

  const backbtn = useNavigate();

  return (
    <>
      <div>
        <h1>{seeDetails.title}</h1>
        <img src={seeDetails.posterURL} style={{width : 500,height:500, }}/>
        <h3>{seeDetails.description}</h3>

        <p>
          {" "}
          trailer : <a href=""> {seeDetails.trailer} </a>{" "}
        </p>
      </div>
      <Button onClick={() => backbtn("/")} variant="success">
        back to home page
      </Button>
      <Link to={`/movies`}>
          <button style={{ margin:"20px", borderRadius:"25px",background: "linear-gradient(to right,red,white)" }}> movie theater</button>
          </Link>
      
    </>
  );
};

export default MoviesDetails;