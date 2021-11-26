import "./destination.style.css";
import Card from "../../Card/Card";

const Destination = () => {
  const destinationCards = [
    {
      cardText: "Delhi",
      cardImg:
        "https://cdn.discordapp.com/attachments/753151975570276352/866270198931521566/unknown.png",
    },
    {
      cardText: "Agra",
      cardImg:
        "https://cdn.discordapp.com/attachments/753151975570276352/866356469574533130/unknown.png",
    },
    {
      cardText: "Jaipur",
      cardImg:
        "https://cdn.discordapp.com/attachments/753151975570276352/866356767298289675/unknown.png",
    },
    {
      cardText: "Mumbai",
      cardImg:
        "https://cdn.discordapp.com/attachments/753151975570276352/866357186963701760/unknown.png",
    },
    {
      cardText: "Kerala",
      cardImg:
        "https://cdn.discordapp.com/attachments/753151975570276352/866359917882638346/74337330.png",
    },
    {
      cardText: "Varanasi",
      cardImg:
        "https://cdn.discordapp.com/attachments/753151975570276352/866360148783136768/varanasi.png",
    },
    {
      cardText: "Chennai",
      cardImg:
        "https://cdn.discordapp.com/attachments/753151975570276352/866360434696388608/CHENNAI20.png",
    },
    {
      cardText: "Kolkata",
      cardImg:
        "https://cdn.discordapp.com/attachments/753151975570276352/866360558755250186/attr_1815_20190329140817.png",
    },
    {
      cardText: "Punjab",
      cardImg:
        "https://cdn.discordapp.com/attachments/753151975570276352/866360745208709150/amritsar-3083693_960_720.png",
    },
    {
      cardText: "Bangalore",
      cardImg:
        "https://cdn.discordapp.com/attachments/753151975570276352/866360851211485213/Untitled-design-min.png",
    },
    {
      cardText: "Ooty",
      cardImg:
        "https://cdn.discordapp.com/attachments/753151975570276352/866361457921753088/ooty.png",
    },
    {
      cardText: "Gujarat",
      cardImg:
        "https://cdn.discordapp.com/attachments/753151975570276352/866361705097461780/Rani-ki-Vav-Gujarat.png",
    },
  ];

  return (
    <div className="destination">
      <div className="destination-wrapper">
        <div className="destination-heading">
          <h2>Travel Destinations you would like to visit in India!</h2>
        </div>
        <div className="destination-card-container">
          {destinationCards.map((card, i) => (
            <Card key={i} cardText={card.cardText} imgSrc={card.cardImg} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destination;
