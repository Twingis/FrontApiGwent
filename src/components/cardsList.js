"use client";
import { useState } from "react";
import Card from "./card";

export default function CardList({ list }) {
  const [nameFilter, setNameFilter] = useState("");
  let cards = [];
  for (const card in list) {
    cards.push(list[card]);
  }
  console.log(nameFilter);
  cards = cards.filter((card) =>
    accentFold(card.name.toLowerCase()).includes(
      accentFold(nameFilter.toLowerCase())
    )
  );
  let cardsComponents = [];
  let cpt = 0;
  for (const card in cards) {
    cardsComponents.push(
      <Card html={cards[card].image} key={cpt} id={cards[card].id.card} />
    );
    cpt++;
  }

  return (
    <div>
      <input
        className="p-4 border-1"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
      />
      <div className="flex flex-wrap p-12"> {cardsComponents} </div>
    </div>
  );
}

function accentFold(inStr) {
  return inStr.replace(
    /([àáâãäå])|([çčć])|([èéêë])|([ìíîï])|([ñ])|([òóôõöø])|([ß])|([ùúûü])|([ÿ])|([æ])/g,
    function (str, a, c, e, i, n, o, s, u, y, ae) {
      if (a) return "a";
      if (c) return "c";
      if (e) return "e";
      if (i) return "i";
      if (n) return "n";
      if (o) return "o";
      if (s) return "s";
      if (u) return "u";
      if (y) return "y";
      if (ae) return "ae";
    }
  );
}
