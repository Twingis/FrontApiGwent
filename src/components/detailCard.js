import ModalPortal from "./modalPortal";

export default async function DetailCard({ id }) {
  const cardImage = await retrieveCardImage(id);
  const cardInfo = await retrieveCardInfo(id);
  const htmlImage = { __html: cardImage };
  const styleFormat = {
    Gold: "text-[#d4af37]",
    Silver: "text-[#C0C0C0]",
    Bronze: "text-[#cd7f32]",
  };
  const pStyle = styleFormat[cardInfo.attributes.color];

  return (
    <div className="grid ">
      <div dangerouslySetInnerHTML={htmlImage}></div>
      <p className="text-red-500 text-2xl">{cardInfo.name}</p>
      <p className="text-stone-800 text-xl">
        Faction : {translateFaction(cardInfo.attributes.faction)}
      </p>
      <p className={pStyle}>Couleur : {cardInfo.attributes.color}</p>
      <p> Categorie : {cardInfo.category}</p>
      <p> Capacité : {cardInfo.ability} </p>
      <ModalPortal infos={cardInfo} />
    </div>
  );
}

async function retrieveCardImage(id) {
  const data = await fetch(
    "https://api.gwent.one/?key=data&id=" +
      id.toString() +
      "&html=info&response=html&class=rounded&language=fr"
  );
  const result = await data.text();
  return result;
}

async function retrieveCardInfo(id) {
  const data = await fetch(
    "https://api.gwent.one/?key=data&id=" +
      id.toString() +
      "&response=json&class=rounded&json=keywords&language=fr"
  );
  const result = await data.json();
  return result.response[0];
}

function translateFaction(faction) {
  switch (faction) {
    case "Neutral":
      return "Neutre";
    case "Northern Realms":
      return "Royaume du Nord";
    case "Scoiatael":
      return "Scoia'Tael";
    case "Monsters":
      return "Monstres";
    case "Nilfgaard":
      return "Nilfgaard";
  }
}

function handleClik() {}
