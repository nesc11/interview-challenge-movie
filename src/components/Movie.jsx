export const Movie = ({ title, image_url, year }) => {
  return (
    <li>
      <h3>{title}</h3>
      <p>{year}</p>
      <div>
        <img src={image_url} alt="" />
      </div>
    </li>
  );
};
