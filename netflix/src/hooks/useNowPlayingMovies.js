import axios from "axios";
import { getNowPlayingMovies } from "../redux/movieSlice";
import { now_Playing_movies,options } from "../utils/constant";
import { useDispatch } from "react-redux";


const useNowPlayingMovies = async()=>{
    const dispatch = useDispatch();
    try{
        const res = await res.get(now_Playing_movies,options);
        console.res(res.data.results);
        dispatch(getNowPlayingMovies(res.data.results));
    }
    catch(error){
        console.log(error);
    }
  }

export default useNowPlayingMovies;