import React from "react";
import Card from "./Card";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";

const BlogSec = () => {
  return (
    <>
      <header>
        <h4> my recent post </h4>
        <h1> my blog </h1>
      </header>

      <section>
        <Card img={img1} />
        <Card img={img2} />
        <Card img={img3} />
      </section>
    </>
  );
};

export default BlogSec;
