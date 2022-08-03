import React, { useState } from "react";
import Header from "./Components/Header";
import Input from "./Components/Input";
import Main from "./Components/Main";
import "./Components/Style.css";
import { GiCancel } from "react-icons/gi";
import uuid from "react-uuid";
import StatDisplay from "./Components/StatDisplay";
import Footer from "./Components/Footer";

function App() {
  const [links, setLinks] = useState([]);
  const [buttonText, setButtonText] = useState("Copy");
  const [copied, setCopied] = useState(false);

  const ref = React.createRef();
  const shortenLink = () => {
    const link = ref.current.value;
    if (!link) {
      alert("Please, enter a link to continue");
      return;
    }
    const url = `https://api.shrtco.de/v2/shorten?url=${link}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => getLinks(data.result))
      .catch((err) => console.log(err));
  };

  const getLinks = (link) => {
    const { full_short_link2, original_link } = link;
    const returned = {
      id: uuid(),
      original: original_link,
      shortLink: full_short_link2,
    };

    setLinks((prev) => [...prev, returned]);
  };
  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    setButtonText("Copied!");
    setCopied(true);
  };
  const deleteLink = (ID) => {
    const items = [...links];
    console.log(items);
    let index;
    items.forEach((ele, i) => {
      if (ele.id === ID) index = i;
    });
    items.splice(index, 1);
    setLinks(items);
  };
  return (
    <div>
      <Header />
      <Main />

      <div className="second-part">
      <Input ref={ref} clickFunc={shortenLink} />
      {links.map((ele) => (
        <div key={ele.id} className="link-container">
          <p>{ele.original}</p>
          <div>
            <p>{ele.shortLink}</p>
            <button
              onClick={() => copyText(ele.shortLink)}
              className={copied ? "copied" : "not-copied"}
            >
              {buttonText}
            </button>
            <GiCancel
              style={{ color: "red", fontSize: "30px", marginTop: "-90px" }}
              onClick={() => deleteLink(ele.id)}
            />
          </div>
        </div>
      ))}
      <StatDisplay/>
      </div>
    <Footer/>
    </div>
  );
}

export default App;
/* <button onClick={() => {navigator.clipboard.writeText(ele.shortLink)}}>{buttonText}</button> */
