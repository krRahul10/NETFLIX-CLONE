import React from "react";
import "./Home.scss";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const apikey = "42e9714969fb5808eb6da24b200b264d";

const url = "https://api.themoviedb.org/3/movie";

const upcoming = "/upcoming";

const imgUrl = 'https://image.tmdb.org/t/p/original'

const Card = ({ img }) => <img className="card" src={img} alt="cover" />;

const Row = ({
  title,
  arr = [
    {
      img: "https://everyevery.ng/wp-content/uploads/2019/03/InfinityWar5aabd55fed5fa.jpg",
    },
  ],
}) => (
  <div className="row">
    <h2>{title}</h2>
    <div>
      {arr.map((item, index) => (
        <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
      ))}
      {/* <Card
        img={
          "https://everyevery.ng/wp-content/uploads/2019/03/InfinityWar5aabd55fed5fa.jpg"
        }
      /> */}
    </div>
  </div>
);
const Home = () => {
  const [upcomingMovies, setUpcomingMovie] = useState([]);

  useEffect(() => {
    const fetchUpcoming = async () => {
      const {
        data: { results }
      } = await axios.get(`${url}${upcoming}?api_key=${apikey}`);
      //    console.log(results)
      setUpcomingMovie(results);
      console.log(upcomingMovies);
    };
    fetchUpcoming();
  }, []);
  return (
    <section className="home">
      <div className="banner"></div>
      <Row title={"Upcoming Movies"} arr={upcomingMovies} />
      <Row title={"Popular on Netflix"} />
      <Row title={"TV Show"} />
      <Row title={"Recently Viewed"} />
      <Row title={"My List"} />
    </section>
  );
};

export default Home;
