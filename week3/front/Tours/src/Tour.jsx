// src/Tour.jsx 
// yoinked from task, but read in an educated manner. (Making article objects is not worth my time in 5 minute tasks)
const Tour = (props) => {
  const { image, info, name, price } = props.tour;

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">€{price}</h4>
        </div>
        <p>
          {`${info.substring(0, 200)}...`}
          <button>read more</button>
        </p>
        <button className="delete-btn">not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
