import Card from "../Card/Card";
import "./culture-page.style.css";

const cultureImages = [
  {
    text: "Festivals",
    image:
      "https://cdn.discordapp.com/attachments/753151975570276352/866522596144840744/unknown.png",
  },
  {
    text: "Cities",
    image:
      "https://cdn.discordapp.com/attachments/753151975570276352/866613071106277386/unknown.png",
  },
  {
    text: "Culture",
    image:
      "https://cdn.discordapp.com/attachments/753151975570276352/866613106619711488/unknown.png",
  },
  {
    text: "Food",
    image:
      "https://cdn.discordapp.com/attachments/753151975570276352/866613370027376690/unknown.png",
  },
  {
    text: "Architecture",
    image:
      "https://cdn.discordapp.com/attachments/753151975570276352/866613453778321428/unknown.png",
  },
  {
    text: "Art",
    image:
      "https://cdn.discordapp.com/attachments/753151975570276352/866613493971812382/unknown.png",
  },
  {
    text: "Temples",
    image:
      "https://cdn.discordapp.com/attachments/753151975570276352/866613516324438016/unknown.png",
  },
  {
    text: "Beach",
    image:
      "https://cdn.discordapp.com/attachments/753151975570276352/866613538507587594/unknown.png",
  },
];

const CulturePage = () => {
  return (
    <div className="culture-page" id="culture">
      <h1>India's Culture</h1>
      <div className="card-grid">
        {cultureImages.map((element, id) => (
          <div key={id}>
            <Card imgSrc={element.image} cardText={element.text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CulturePage;
