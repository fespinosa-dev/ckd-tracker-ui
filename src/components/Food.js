const Food = ({ image, description, servingSize, proteinQuantity }) => {
  return (
    <div className="card shadow-lg compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full w-14 h-14 shadow">
              <img src={image} />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="card-title">{description}</h2>
          <p className="text-base-content text-opacity-40">{servingSize}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-base-content">{proteinQuantity}</p>
          <p className="text-base-content">Protein</p>
        </div>
      </div>
    </div>
  );
};

export default Food;
