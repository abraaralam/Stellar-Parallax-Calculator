import React, { useState } from "react";
import TextboxForm from "./components/TextboxForm";
import ParallaxDisplay from "./components/ParallaxDisplay";
import WikipediaInfo from "./components/WikipediaInfo";

const App = () => {
  const [parallaxValue, setParallaxValue] = useState(null);
  const [stellarObjectName, setStellarObjectName] = useState("");

  const handleSubmitToBackend = async (value) => {
    const response = await fetch("/api/get-parallax", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ stellar_object_name: value }),
    });

    const data = await response.json();
    if (data.parallax) {
      setParallaxValue(data.parallax);
      setStellarObjectName(value);
    }
  };

  return (
    <div>
      <TextboxForm onSubmit={handleSubmitToBackend} />

      {/* Grid Container */}
      <div className="row g-0">
        {stellarObjectName !== "" && (
          <div className="col-md-6">
            <WikipediaInfo stellarObjectName={stellarObjectName} />
          </div>
        )}

        {parallaxValue !== null && (
          <div className="col-md-6">
            <ParallaxDisplay parallax={parallaxValue} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
