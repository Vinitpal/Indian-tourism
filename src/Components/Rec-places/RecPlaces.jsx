import "./RecPlaces.style.css";
import Card from "../Card/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1000, min: 600 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

const RecPlaces = () => {
  const places = [
    {
      name: "Taj Mahal",
      image:
        "https://cdn.discordapp.com/attachments/753151975570276352/866485799548354560/unknown.png",
    },
    {
      name: "Statue of Unity",
      image:
        "https://cdn.discordapp.com/attachments/753151975570276352/866599607995858944/unknown.png",
    },
    {
      name: "India Gate",
      image:
        "https://cdn.discordapp.com/attachments/753151975570276352/866599865583403008/unknown.png",
    },
    {
      name: "St. Cajetan Church",
      image:
        "https://cdn.discordapp.com/attachments/753151975570276352/866599554270887936/unknown.png",
    },
    {
      name: "Hawa Mahal",
      image:
        "https://cdn.discordapp.com/attachments/753151975570276352/866603105517174784/unknown.png",
    },
    {
      name: "Mysore Palace",
      image:
        "https://cdn.discordapp.com/attachments/753151975570276352/866602026182770688/unknown.png",
    },
    {
      name: "Safdarjung Tomb",
      image:
        "https://cdn.discordapp.com/attachments/753151975570276352/866643062360375306/safdarjung-tomb.jpg",
    },
    {
      name: "Jim Corbet Nationalpark",
      image:
        "https://cdn.discordapp.com/attachments/753151975570276352/866643090088919040/jimcorbet-national-park.jpg",
    },
  ];

  return (
    <div className="RecPlaces">
      <div className="text">
        <h1>Places We Recommend !</h1>
        <p>Places worth visiting in India</p>
      </div>
      <div className="rec-places-list">
        <Carousel
          centerMode={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          infinite={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["mobile"]}
          itemClass="carousel-item-padding-40-px"
        >
          {places.map((place, id) => (
            <Card key={id} cardText={place.name} imgSrc={place.image} />
          ))}
        </Carousel>
      </div>
      <div className="btm-design">
        <button>View All</button>
      </div>
    </div>
  );
};

export default RecPlaces;
