import React from "react";
import "./Home.scss";

const Card = ({ img }) => <img className="card" src={img} alt="cover" />;

const Row = ({ title }) => (
  <div className="row">
    <h2>{title}</h2>
    <div>
      <Card
        img={
          "https://everyevery.ng/wp-content/uploads/2019/03/InfinityWar5aabd55fed5fa.jpg"
        }
      />
      <Card
        img={
          "https://everyevery.ng/wp-content/uploads/2019/03/InfinityWar5aabd55fed5fa.jpg"
        }
      />
      <Card
        img={
          "https://everyevery.ng/wp-content/uploads/2019/03/InfinityWar5aabd55fed5fa.jpg"
        }
      />
      <Card
        img={
          "https://everyevery.ng/wp-content/uploads/2019/03/InfinityWar5aabd55fed5fa.jpg"
        }
      />
      <Card
        img={
          "https://everyevery.ng/wp-content/uploads/2019/03/InfinityWar5aabd55fed5fa.jpg"
        }
      />
      <Card
        img={
          "https://everyevery.ng/wp-content/uploads/2019/03/InfinityWar5aabd55fed5fa.jpg"
        }
      />
      <Card
        img={
          "https://everyevery.ng/wp-content/uploads/2019/03/InfinityWar5aabd55fed5fa.jpg"
        }
      />
    </div>
  </div>
);
const Home = () => {
  return (
    <section className="home">
      <div className="banner"></div>
      <Row title={"Popular on Netflix"} />
    </section>
  );
};

export default Home;
