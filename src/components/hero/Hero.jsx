import "./hero.scss";
import { motion } from "framer-motion";
import CvOliverta from "../file/CV-Oliverta_Murra2024.pdf";

const Hero = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 0,
      transition: {
        duration: 2,
        repeatType: "mirror",
        repeat: Infinity,
      },
    },
  };
  const slideVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        duration: 25,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>
            Junior Front-End Developer
          </motion.h2>
          <motion.h1 variants={textVariants}>
            Passionate programmer with a BSc in Informatic-Economic and an MSc
            in Cyber Security. Self-motivated, disciplined, and committed to
            continuous learning for delivering excellence in every project.
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <a href={CvOliverta} download="Cv-OlivertaMurra">
              <motion.button type="button" variants={textVariants}>
                Download CV
              </motion.button>
            </a>
            <a href="#Contact">
              {" "}
              <motion.button variants={textVariants}>Contact Me </motion.button>
            </a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
          ></motion.img>
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={slideVariants}
        initial="initial"
        animate="animate"
      >
        Front-End Developer Debugging
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png"></img>
      </div>
    </div>
  );
};

export default Hero;
