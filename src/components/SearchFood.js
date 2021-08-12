import Header from "./Header";

const SearchFood = () => {
  return (
    <div>
      <Header>
        <h2>Search Food </h2>
      </Header>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>
                <div className="flex">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                  <input
                    placeholder="Search"
                    className="input input-bordered input-sm"
                    type="text"
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Apple</td>
            </tr>
            <tr>
              <td>Apple, Raw</td>
            </tr>
            <tr>
              <td>Apple Juice</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchFood;
