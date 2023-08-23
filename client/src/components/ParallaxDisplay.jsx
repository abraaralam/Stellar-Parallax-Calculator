import React from "react";
import EQN1 from "../images/parallaxEqn.png";
import EQN2 from "../images/arcsecConvertEqn.png";
import EQN3 from "../images/lightyearConvertEqn.png";

const ParallaxDisplay = ({ parallax }) => {
  const arcseconds = parallax / 1000;
  const parsecdist = 1 / arcseconds;
  const lightyeardist = parsecdist * 3.262;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Parallax Value:</h2>
      <p>{parallax} milliarcseconds</p>

      <h4 className="mt-4">Converting to Arcseconds</h4>
      <p>
        In order to find the distance, we must convert the milliarcseconds to
        arcseconds using this equation:
      </p>
      <img src={EQN2} alt="EQN1" className="img-fluid" />
      <p>
        {parallax} / 1000 = {arcseconds} arcseconds
      </p>

      <h4 className="mt-4">Find Distance in Parsecs</h4>
      <p>
        Now we must use the arcseconds value in this equation to find the
        distance in parsecs:
      </p>
      <img src={EQN1} alt="EQN2" className="img-fluid" />
      <p>
        1 / {arcseconds} = {parsecdist.toFixed(3)} parsecs
      </p>

      <h4 className="mt-4">Find Distance in Lightyears</h4>
      <p>
        If you want to know the distance from Earth in lightyears, use this
        equation:
      </p>
      <img src={EQN3} alt="EQN3" className="img-fluid" />
      <p>
        {parsecdist.toFixed(3)} * 3.262 = {lightyeardist.toFixed(3)} lightyears!
      </p>
    </div>
  );
};

export default ParallaxDisplay;
