const Food = ({ image, description, servingSize, proteinQuantity }) => {
  return (
    <div class="card shadow-lg compact side bg-base-100">
      <div class="flex-row items-center space-x-4 card-body">
        <div>
          <div class="avatar">
            <div class="rounded-full w-14 h-14 shadow">
              <img src={image} />
            </div>
          </div>
        </div>
        <div class="flex-1">
          <h2 class="card-title">{description}</h2>{" "}
          <p class="text-base-content text-opacity-40">{servingSize}</p>
        </div>{" "}
        <div class="flex flex-col">
          <p class="text-base-content">{proteinQuantity}</p>
          <p class="text-base-content">Protein</p>
        </div>
      </div>
    </div>
  );
};

export default Food;
