import CardList from "@/components/cardsList";
import * as cheerio from "cheerio";

export default async function Home() {
  const dataImage = await fetch(
    "https://api.gwent.one/?key=data&response=html&html=info&class=rounded&version=1.0.0.15"
  );
  const result = await dataImage.text();
  const cards = extractCard(result);

  const dataJson = await fetch(
    "https://api.gwent.one/?key=data&version=1.0.0.15&language=fr"
  );
  const resultJson = await dataJson.json();
  for (const card in resultJson.response) {
    Object.defineProperty(resultJson.response[card], "image", {
      value: cards[card].html,
      enumerable: true,
    });
  }
  let cardsList = [];
  for (const card in resultJson.response) {
    cardsList.push(resultJson.response[card]);
  }

  return <CardList list={cardsList} />;
}

function extractCard(htmlString) {
  const load = cheerio.load(htmlString);
  const cards = [];

  load(".G1-card").each((i, elem) => {
    const idCard = load(elem).attr("data-id");
    const html = load.html(elem);
    cards.push({
      id: idCard,
      html: html,
    });
  });

  return cards;
}
