import React, { useState, useEffect } from "react";

const WikipediaInfo = ({ stellarObjectName }) => {
  const [introParagraph, setIntroParagraph] = useState("");
  const [mainImageSrc, setMainImageSrc] = useState("");
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const fetchWikipediaData = async () => {
      try {
        const response = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts|pageimages&exintro=true&explaintext=true&pithumbsize=500&titles=${stellarObjectName}`
        );

        const data = await response.json();
        const pageId = Object.keys(data.query.pages)[0];
        const page = data.query.pages[pageId];

        if (page.extract && page.extract.length > 0) {
          setIntroParagraph(page.extract);
          setShowCard(true);
        } else {
          setIntroParagraph("No information available.");
          setShowCard(true);
        }

        if (page.thumbnail) {
          setMainImageSrc(page.thumbnail.source);
        }
      } catch (error) {
        console.error("Error fetching Wikipedia data:", error);
      }
    };

    fetchWikipediaData();
  }, [stellarObjectName]);

  // Truncate the intro paragraph to 400 characters
  const truncatedIntro = introParagraph.substring(0, 400) + "...";

  const wikipediaLink = `https://en.wikipedia.org/wiki/${stellarObjectName}`;

  return (
    <div>
      {showCard && (
        <div className="card" style={{ width: "38rem" }}>
          <img src={mainImageSrc} className="card-img-top" alt="Main" />
          <div className="card-body">
            <h5 className="card-title">About</h5>
            <p className="card-text">{truncatedIntro}</p>
            <a
              href={wikipediaLink}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Wikipedia
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default WikipediaInfo;
