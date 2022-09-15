import React from "react";
import "./Home.scss";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const apikey = "42e9714969fb5808eb6da24b200b264d";

const url = "https://api.themoviedb.org/3";

const upcoming = "upcoming";

const nowPlaying = "now_playing";

const popular = "popular";

const topRated = "top_rated";

const imgUrl = "https://image.tmdb.org/t/p/original";

const Card = ({ img }) => <img className="card" src={img} alt="cover" />;

const Row = ({ title, arr = [] }) => (
  <div className="row">
    <h2>{title}</h2>
    <div>
      {arr.map((item, index) => (
        <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
      ))}
    </div>
  </div>
);
const Home = () => {
  const [upcomingMovies, setUpcomingMovie] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [genreMovies, setGenreMovies] = useState([]);

  useEffect(() => {
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apikey}`);
      //    console.log(results)
      setUpcomingMovie(results);
      console.log(upcomingMovies);
    };

    const fetchNowPlaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apikey}`);
      //    console.log(results)
      setNowPlayingMovies(results);
      // console.log(upcomingMovies);
    };

    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${apikey}`);
      //    console.log(results)
      setPopularMovies(results);
      // console.log(upcomingMovies);
    };

    const fetchTopRated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${apikey}`);
      //    console.log(results)
      setTopRatedMovies(results);
      // console.log(upcomingMovies);
    };

    const getAllGenre = async () => {

        const {
          data: { genres },
        } = await axios.get(`${url}/genre/movie/list?api_key=${apikey}`);
        //    console.log(results)
        setGenreMovies(genres);
        console.log(genres)
        // console.log(upcomingMovies);
      };

    fetchUpcoming();
    fetchTopRated();
    fetchPopular();
    fetchNowPlaying();
    // getAllGenre()
  }, []);
  return (
    <section className="home">
      <div className="banner"></div>
      <Row title={"Upcoming Movies"} arr={upcomingMovies} />
      <Row title={"Now Playing Movies"} arr={nowPlayingMovies} />
      <Row title={"Top Rated Movies"} arr={topRatedMovies} />
      <Row title={"Popular Movies"} arr={popularMovies} />
      <div className="genreBox">
        {genreMovies.map((elem, index) =>(
            <Link key={index} to={`/genre/${elem.id}`}>{elem.name}</Link>
        ))}
      </div>
    </section>
  );
};

export default Home;
