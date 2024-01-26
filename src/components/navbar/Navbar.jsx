import Sidebar from "../sidebar/Sidebar.jsx";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Oliverta Murra
        </motion.span>
        <div className="social">
          <a href="https://github.com/olivertamurra" target="_blank">
            <img src="/gitlogo.png" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/oliverta-murra-71a09b19a/"
            target="_blank"
          >
            <img src="/linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
