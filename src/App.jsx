import { useEffect, useRef, useState } from "react";
import styles from "./css/universal.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";

function App() {
  const project = useRef();
  const [visibility, setVisibility] = useState();
  console.log(`visibility = ${visibility}`);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setVisibility(!entry.isIntersecting);
    });
    observer.observe(project.current);
  });

  return (
    <div className="parent">
      <Home />
      <AboutMe />
      <div
        ref={project}
        className={`projects hidden ${visibility ? styles.show : ``}`}
      >
        <Projects />
      </div>
    </div>
  );
}

export default App;
