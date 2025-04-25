"use client";
import { useState } from "react";
import Card from "./card";

export default function CardList({ list }) {
  const [nameFilter, setNameFilter] = useState("");
  const [rarityFilter, setRarityFilter] = useState("");

  let cards = list.filter((card) =>
    accentFold(card.name.toLowerCase()).includes(
      accentFold(nameFilter.toLowerCase())
    )
  );

  if (rarityFilter != "") {
    cards = cards.filter((card) => card.attributes.rarity == rarityFilter);
  }

  const cardsComponents = cards.map((card, index) => (
    <Card html={card.image} key={index} id={card.id.card} />
  ));
  return (
    <div className="p-1">
      <input
        className="p-4 border-1"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
      />
      <select
        className="p-1"
        id="Rarity"
        value={rarityFilter}
        onChange={(e) => setRarityFilter(e.target.value)}
      >
        <option value="">Rareté</option>
        <option value="Legendary">Légendaire</option>
        <option value="Epic">Epique</option>
        <option value="Rare">Rare</option>
        <option value="Common">Ordinaire</option>
      </select>
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
