// src/TourList.jsx
import Tour from "./Tour.jsx";

const TourList = (props) => {
  const { tours } = props;
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((item) => {
          return <Tour key={item.id} tour={item} />
        })}
      </div>
    </section>
  );
};

export default TourList;
