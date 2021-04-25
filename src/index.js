import React from "react";
import ReactDom from "react-dom";
import "./style.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const element = <FontAwesomeIcon icon={faTwitter} />;

const App = () => {
  return (
    <div>
      <Container />
    </div>
  );
};

const quotes = [
  {
    quote: "If you want to lift yourself up, lift up someone else.",
    author: "- Booker T. Washington",
  },
  {
    quote: "When I let go of what I am, I become what I might be.",
    author: "- Lao Tzu",
  },
  {
    quote:
      "You may be disappointed if you fail, but you are doomed if you don’t try.",
    author: "- Beverly Sills",
  },
  {
    quote:
      "If you do what you’ve always done, you’ll get what you’ve always gotten.",
    author: "- Tony Robbins",
  },
  {
    quote:
      "You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
    author: "- Erica Jong",
  },
  {
    quote:
      "Every child is an artist. The problem is how to remain an artist once he grows up.",
    author: "- Pablo Picasso",
  },
  {
    quote: "Start where you are. Use what you have. Do what you can.",
    author: "- Arthur Ashe",
  },
  {
    quote: "Everything you’ve ever wanted is on the other side of fear.",
    author: "- George Addair",
  },
  {
    quote:
      "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
    author: "- Maya Angelou",
  },
  {
    quote:
      "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "- Amelia Earhart",
  },
  {
    quote:
      "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
    author: "- Michael Jordan",
  },
];

const Container = () => {
  return (
    <div className="container">
      <Quotebox />
    </div>
  );
};

const Quotebox = () => {
  const [quote, setQuote] = useState("default");

  const randomQuote = () => {
    const randomInteger = Math.floor(Math.random() * quotes.length);

    if (randomInteger === 0) {
      setQuote(quotes[0]);
    } else if (randomInteger === 1) {
      setQuote(quotes[1]);
    } else if (randomInteger === 2) {
      setQuote(quotes[2]);
    } else if (randomInteger === 3) {
      setQuote(quotes[3]);
    } else if (randomInteger === 4) {
      setQuote(quotes[4]);
    } else if (randomInteger === 5) {
      setQuote(quotes[5]);
    } else if (randomInteger === 6) {
      setQuote(quotes[6]);
    } else if (randomInteger === 7) {
      setQuote(quotes[7]);
    } else if (randomInteger === 8) {
      setQuote(quotes[8]);
    } else if (randomInteger === 9) {
      setQuote(quotes[9]);
    } else if (randomInteger === 10) {
      setQuote(quotes[10]);
    }
  };

  useEffect(() => {
    randomQuote();
  });

  return (
    <div className="quotebox" id="quote-box">
      <div className="quote-section">
        <p className="quote" id="text">
          {quote.quote}
        </p>
        <p className="author" id="author">
          {quote.author}
        </p>
      </div>

      <div className="button-section">
        <button onClick={() => randomQuote()} id="new-quote">
          Another quote
        </button>
        <div className="button">
          <a
            href={encodeURI(
              `http://www.twitter.com/intent/tweet?text=${quote.quote} - ${quote.author}`
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
