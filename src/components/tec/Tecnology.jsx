import "./tecnology.scss";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export default function Tecnology() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <>
      <div className="container">
        <h1>Tecnologies</h1>

        <div className="container2">
          <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="indicator"
              style={{ pathLength: scrollXProgress }}
            />
          </svg>
          <div className="container3">
            <ul ref={ref}>
              <li>
                <img src="/htmll.jpeg" alt="HTMLlogo" />
              </li>
              <li>
                {" "}
                <img src="/cssl.jpeg" alt="CSSlogo" />
              </li>
              <li>
                <img src="/tailwind.png" alt="TAILWINDlogo" />
              </li>
              <li>
                <img src="/bootstrap.png" alt="BOOTSTRAPlogo" />
              </li>
              <li>
                <img src="/js.png" alt="JSlogo" />
              </li>
              <li>
                <img src="/Ts.png" alt="TSlogo" />
              </li>
              <li>
                <img src="/react.jpg" alt="REACTlogo" />
              </li>
              <li>
                <img src="/frame.png" alt="MOTION-FRAMElogo" />
              </li>
              <li>
                <img src="/gith.png" alt="GITlogo" />
              </li>

              <li>
                <img src="/jQuery.png" alt="jQUERYlogo" />
              </li>
              <li>
                <img src="adobeph.png" alt="PHlogo" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
