import React from "react";
import ReactDom from "react-dom";
import "./style.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const element = <FontAwesomeIcon icon={faTwitter} />;

let quoteDB =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

const App = () => {
  return (
    <div>
      <Container />
    </div>
  );
};

const Container = () => {
  return (
    <div className="container">
      <Quotebox />
    </div>
  );
};

const Quotebox = () => {
  const [quote, setQuote] = useState(
    "Start where you are. Use what you have.  Do what you can"
  );
  const [author, setAuthor] = useState("Arthur Ashe");

  const [randomNumber, setrandomNumber] = useState(0);

  const [quotesArray, setquotesArray] = useState("default");

  const fetchQuotes = async (url) => {
    const response = await fetch(url);
    const parsedJSON = await response.json();
    setquotesArray(parsedJSON.quotes);
  };

  const randomQuote = () => {
    const randomInteger = Math.floor(Math.random() * quotesArray.length);
    setrandomNumber(randomInteger);
    setQuote(quotesArray[randomInteger].quote);
    setAuthor(quotesArray[randomInteger].author);
  };

  useEffect(() => {
    fetchQuotes(quoteDB);
  }, [quoteDB]);

  return (
    <div className="quotebox" id="quote-box">
      <div className="quote-section">
        <p className="quote" id="text">
          {quote}
        </p>
        <p className="author" id="author">
          {author}
        </p>
      </div>

      <div className="button-section">
        <button onClick={() => randomQuote()} id="new-quote">
          Another quote
        </button>
        <div className="button">
          <a
            href={encodeURI(
              `http://www.twitter.com/intent/tweet?text=${quote} - ${author}`
            )}
            id="tweet-quote"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
