import Card from "@/components/card";
import * as cheerio from "cheerio";

export default async function Home() {
  const data = await fetch(
    "https://api.gwent.one/?key=data&response=html&html=info&class=rounded&version=1.0.0.15"
  );
  const result = await data.text();
  const cards = extractCard(result);
  const cardList = cards.map((card, index) => (
    <Card html={card.html} id={card.id} key={index}></Card>
  ));
  return <div className="flex flex-wrap p-4">{cardList}</div>;
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
