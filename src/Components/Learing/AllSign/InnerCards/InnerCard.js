import React, { useState } from "react";
import "./InnerCard.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import '../../Card.css'
import leftEllipse from '../../assets/Ellipse154.png'
import starL from '../../assets/Star22.png'
import arrow from '../../assets/Vector417.png'
import rightEllipse from '../../assets/Ellipse155.png'

// parent Card

const InnerCard = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

// Compact Card
function CompactCard({ param, setExpanded }) {
  return (
    <motion.div
      className="CompactCard"
      layoutId="expandableCard"
      onClick={setExpanded}
    >
     <div className='dictionary-card'>
            <div className="left-ellipse"><img src={leftEllipse} alt="" /></div>
            <div className="right-ellipse"><img src={rightEllipse} alt="" /></div>
            <div className="character"><img src={param.img} alt="" /></div>
            <div className="star1"><img src={starL} alt="" /></div>
            <div className="star2"><img src={starL} alt="" /></div>
            <div className="star3"><img src={starL} alt="" /></div>
            <div className="star4"><img src={starL} alt="" /></div>
            <div className="sign-info-btn">
              <div className="sign-text">{param.title}</div>
              <div className="arrow-btn">
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>   </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded }) {

  return (
    <motion.div
      className="ExpandedCard"
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "black" , marginTop: "-5px" }}>
        <UilTimes onClick={setExpanded} />
      </div>
        <span>{param.title}</span>
      <div className="video-responsive">
      <iframe width="560" height="315" src={param.YLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </motion.div>
  );
}

export default InnerCard;
