import { useState } from "react";
import Select from "react-select";

const SearchSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState();

  const optionList = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "yellow", label: "Yellow" },
    { value: "blue", label: "Blue" },
    { value: "white", label: "White" },
  ];

  function handleSelect(data: any) {
    setSelectedOptions(data);
  }

  return (
    <div className="app">
      <div className="dropdown-container w-96">
        <Select
          options={optionList}
          placeholder="Search Series Name"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
        />
      </div>
    </div>
  );
};

export default SearchSelect;
