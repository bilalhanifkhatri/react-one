import React from "react";
import "../styles/Home.scss";
import VG from "../assets/2.webp";

const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solutions to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={VG} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. we are leading tech company whose aim is to increase the
            problem solving ability in chilern.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
            <h1>Who are you?</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et quam doloribus, impedit quis quos temporibus provident aliquid magnam cum excepturi nulla alias est voluptates explicabo mollitia accusantium. Optio, impedit similique.
            Ullam cumque iste at, impedit deserunt labore pariatur dolorum neque vel! Dignissimos tempore natus rerum repudiandae repellat adipisci, fugiat quos soluta repellendus, error, magnam doloremque? Vitae rem repudiandae quod suscipit?
            Ducimus, nemo facere rem, corporis, porro quam error blanditiis quae fuga autem laborum. Ducimus, unde sunt inventore perspiciatis repellat temporibus voluptate deleniti animi dolor totam eligendi distinctio dicta, ad sed!
            Et delectus fugit similique consectetur deserunt eos voluptatum perferendis nobis, maxime libero cumque, accusantium dicta aspernatur sint minima amet excepturi optio vero! Fuga, nesciunt odit sequi asperiores ad ducimus nisi.
            Laboriosam deserunt, Tempore hic consectetur nemo deserunt voluptatem aperiam similique expedita iure adipisci labore reprehenderit veritatis error quisquam delectus maxime ipsam, voluptate a deleniti inventore numquam! Aperiam possimus laborum natus totam voluptates!</p>
        </div>
      </div>
    </>
  );
};

export default Home;
