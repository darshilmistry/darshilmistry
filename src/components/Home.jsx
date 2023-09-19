import "./home.css";
import profile from "../../public/profile.png";
import { useEffect, useState, useRef } from "react";

function Home() {
  const subjects = useRef();
  const [visibility, setVisibility] = useState();
  console.log(visibility);
  console.log(`visibility = ${visibility}`);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setVisibility(!entry.isIntersecting);
    });
    observer.observe(subjects.current);
  });

  return (
    <div ref={subjects} className="innerhome">
      <div className={`${!visibility ? `animateLeft` : `undoAnimateLeft`}`}>
        <h1 className="helloWorld">Hello world!</h1>
        <div className="intro">
          <p>I am</p>
          <p className="name"> Darshil Mistry</p>
        </div>
        <p className="occupation">
          I am a B.Tech. computer science student at Parul University. I
          specialize in smart contract and web development.
        </p>
      </div>
      <img
        className={` profile ${
          !visibility ? `animateRight` : `undoAnimateRight`
        }`}
        src={profile}
      />
    </div>
  );
}

export default Home;
