import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fauzi Ardiansyah </span>
            from <span className="purple"> Brebes, Central Java.</span>
            <br /> I am a Third Semester Student 
            in Computer Science Dian Nuswantoro University.
            <br />
            Additionally, I am enthusiastic about Web Dev.
            <br />
            <br />
            Some of my projects are 
          </p>
          <ul className="">
            <li className="about-activity">
            <div className="d-flex gap-2 align-items-center ">
              <ImPointRight />
              <span className="me-auto">Kalkulator</span> 
            <div className="d-flex gap-2 align-items-center justify-content-center mt-2">
              <a href="https://github.com/Ardiansyah1506/Kalkulator" className="py-1 px-2 rounded border h6 text-decoration-none bg-purple text-white">Code</a>
              <a href="https://ardiansyah1506.github.io/Kalkulator" className="py-1 px-2 rounded border h6 text-decoration-none bg-secondary text-white">Demo</a>
            </div>
            </div>
            </li>
            <li className="about-activity">
            <div className="d-flex gap-2 align-items-center">
              <ImPointRight />
              <span className="me-auto">Zii Movie</span> 
            <div className="d-flex gap-2 align-items-center justify-content-center mt-2">
              <a href="https://github.com/Ardiansyah1506/api-tmdb-react" className="py-1 px-2 rounded border h6 text-decoration-none bg-purple text-white">Code</a>
              <a href="https://ardiansyah1506.github.io/api-tmdb-react" className="py-1 px-2 rounded border h6 text-decoration-none bg-secondary text-white">Demo</a>
            </div>
            </div>
            </li>
            <li className="about-activity">
            <div className="d-flex gap-2 align-items-center ">
              <ImPointRight />
              <span className="me-auto">Flappy Bird</span> 
            <div className="d-flex gap-2 align-items-center justify-content-center mt-2">
              <a href="https://github.com/Ardiansyah1506/flappy-bird" className="py-1 px-2 rounded border h6 text-decoration-none bg-purple text-white">Code</a>
              <a href="https://ardiansyah1506.github.io/flappy-bird" className="py-1 px-2 rounded border h6 text-decoration-none bg-secondary text-white">Demo</a>
            </div>
            </div>
            </li>
            <li className="about-activity">
            <div className="d-flex gap-2 align-items-center ">
              <ImPointRight />
              <span className="me-auto">Loker</span> 
            <div className="d-flex gap-2 align-items-center justify-content-center mt-2">
              <a href="https://github.com/Ardiansyah1506/loker" className="py-1 px-2 rounded border h6 text-decoration-none bg-purple text-white">Code</a>
              <a href="https://fziardiansyah.xyz" className="py-1 px-2 rounded border h6 text-decoration-none bg-secondary text-white">Demo</a>
            </div>
            </div>
            </li>
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
