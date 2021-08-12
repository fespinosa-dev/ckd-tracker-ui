import CircleButton from "./CircleButton";

const AddFood = () => {
  return (
    <div className="grid grid-rows-3">
      <div className="flex">
        <CircleButton />
        <div className="m-4">
          <h1>Food description goes here.</h1>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="text-center">
          <div className="ml-1">Amount</div>
        </div>
        <div>
          <input
            type="number"
            placeholder="1"
            class="input input-sm input-bordered"
          />
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="text-center	">
          <div className="ml-1">Serving Size</div>
        </div>
        <div>
          <select class="select select-bordered select-sm">
            <option disabled="disabled" selected="selected">
              Choose serving size
            </option>
            <option>medium</option>
            <option>small</option>
            <option>large</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center">
        <input type="button" value="Add Food" class="btn" />
      </div>
    </div>
  );
};

export default AddFood;
