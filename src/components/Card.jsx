const Card = ({
  mainTitle,
  subTitle,
  buttonTitle,
  bgColour,
  hrefLink,
  buttonBgColour,
}) => {
  return (
    <div className={`bg-gray-100 p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">{mainTitle}</h2>
      <p className="mt-2 mb-4">{subTitle}</p>
      <a
        href={hrefLink}
        className={`inline-block bg-${buttonBgColour} text-white rounded-lg px-4 py-2 hover:bg-${bgColour}-600`}
      >
        {buttonTitle}
      </a>
    </div>
  );
};

export default Card;
