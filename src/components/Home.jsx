import React from "react";
import VG from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
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
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et quam
            doloribus, impedit quis quos temporibus provident aliquid magnam cum
            excepturi nulla alias est voluptates explicabo mollitia accusantium.
            Optio, impedit similique. Ullam cumque iste at, impedit deserunt
            labore pariatur dolorum neque vel! Dignissimos tempore natus rerum
            repudiandae repellat adipisci, fugiat quos soluta repellendus,
            error, magnam doloremque? Vitae rem repudiandae quod suscipit?
            Ducimus, nemo facere rem, Tempore hic consectetur nemo deserunt
            voluptatem aperiam similique expedita iure adipisci labore
            reprehenderit veritatis error quisquam delectus maxime ipsam,
            voluptate a deleniti inventore numquam! Aperiam possimus laborum
            natus totam voluptates!
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.25s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.75s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "1.0s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
