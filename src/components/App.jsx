import React from "react";
import Card from "./Card";
import Header from "./Header";
import emojipedia from "../emojipedia"

function createCard(emoji){
  return (<Card 
  key={emoji.id}
  sympol={emoji.emoji}
  title={emoji.name}
  description={emoji.meaning}
  />);
}

function App() {
  return (
    <div>
      <Header />

      <dl className="dictionary">
        {emojipedia.map(createCard)}
      </dl>
    </div>
  );
}

export default App;
