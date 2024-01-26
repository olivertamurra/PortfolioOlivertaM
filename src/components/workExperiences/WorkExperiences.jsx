import { useRef } from "react";
import "./workexperiences.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const WorkExperiences = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="work"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>My</motion.b> Work
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Experience</motion.b>{" "}
          </h1>
          <a href="#Portfolio">
            <button>WHAT I DO?</button>
          </a>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>ESDP</h2>
          <h3>
            IT Specialist <br />
            2021-2023
          </h3>
          <p>
            <ul>
              <li>
                Resolved complex technical issues and performed meticulous bug
                detection for clients.{" "}
              </li>{" "}
              <li>
                Conducted training sessions for new personnel, focusing on
                printer calibration and device usage.
              </li>
              {/* <li>
                Provided technical assistance through telecommunications and
                on-site support.
              </li> */}
            </ul>
          </p>{" "}
          <a href="https://esdp.al/" target="_blank">
            <button> View Company</button>{" "}
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>ESDP</h2>
          <h3>
            Junior Front-End Dev
            <h4> 2022-2023 </h4>
          </h3>
          <p>
            <ul>
              <li>
                Initiated my programming journey and actively participated in
                web development projects for the company.
              </li>
              <li>
                {" "}
                Engaged in daily tasks related to front-end development,
                contributing to the enhancement of web applications.
              </li>
            </ul>
          </p>
          <a href="https://esdp.al/" target="_blank">
            <button> View Company</button>{" "}
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Honest Solution</h2>
          <h3>Junior Front-End Dev</h3>
          <p>
            <ul>
              <li>
                Developed and honed my programming skills while actively
                contributing to various web development projects.
              </li>
              <li>
                {" "}
                Played a key role in shaping and implementing new features,
                showcasing my proficiency in programming.
              </li>
            </ul>
          </p>
          <a href="https://www.honestsolutions.co.uk/" target="_blank">
            <button> View Company</button>{" "}
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WorkExperiences;
