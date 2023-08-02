import React from "react";
import Top from "./Top";
import Card from "./Card";
import card from "../card";

function createCard(entry){
    return(
        <Card
        key={entry.id}
        title={entry.title}
        meaning={entry.meaning} />
    );
}

function App(){
    return(
        <div> 
            <Top />
            <dl>{card.map(createCard)}</dl>
        </div>
    );
}

export default App;