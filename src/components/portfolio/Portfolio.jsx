import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "GuardAgainstPhish",
    img: "./phishingDet.png",
    demo: "https://github.com/olivertamurra/phishing-detecto",
    desc: "This is an informational and educational platform that aims to provide information about phishing attacks. The main purpose of this website is to inform you about possible risks of phishing attacks and, at the same time, offer a valuable educational resource to help you avoid these threats and protect yourself. The platform seeks to raise awareness about the risks and prepare users to recognize and avoid phishing attacks, safeguarding their sensitive information and staying secure online.",
  },
  {
    id: 2,
    title: "Add",
    img: "./add.png",
    demo: "https://github.com/olivertamurra/Add/tree/main/erta",
    desc: "Add is a list where you can add a student or a teacher. First, you need to enter the name and then their role (student or teacher). When you press the Add to List button, the participant will be added to the Members List. There is also an option to remove a participant from the list in case of a mistake. On the right side, there is a search function where you can search for a specific participant that you added to the list. If you refresh the page, all the data added will still be displayed on the page as it is saved in the local storage.",
  },
  {
    id: 3,
    title: "Pig-Game",
    img: "./dicegame.png",
    demo: "https://github.com/olivertamurra/Pig-Game-",
    desc: "Pig-game is a game played with two players. When the player presses the Roll Dice button in the center, a random number appears and the sum is stored in the Current Number. However, if the number 1 appears when the player has pressed Hold, the sum will be reset to zero.",
  },
  {
    id: 4,
    title: "Guess My Number",
    img: "./piggame.png",
    demo: "https://github.com/olivertamurra/Guess-My-Number-Game",
    desc: "This is a game where you have to find the randomly generated number based on the hints given on the right. For each mistake, one point is deducted from your score. If you reach zero score, you lose the game. If you find the number before reaching zero score, your high score increases.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.demo} target="_blank">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
