import { AiFillMinusCircle } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useState } from "react";

interface Input {
  firstname: string;
  lastname: string;
}
const SamplePOC = () => {
  const [state, setState] = useState<any>([]);
  const [inputs, setInputs] = useState<Input[]>([
    { firstname: "", lastname: "" },
  ]);

  const [myArray, setMyArray] = useState<any>([]);

  const add = () => {
    const abc = [...state, []];
    setState(abc);
  };

  const handleDelete = (index: number) => {
    const deletVal = [...state];
    deletVal.splice(index, 1);
    setState(deletVal);

    const updatedInputs = [...inputs];
    updatedInputs.splice(index, 1);
    setInputs(updatedInputs);
  };

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    const updatedInputs = [...inputs];
    updatedInputs[index] = { ...updatedInputs[index], [name]: value };
    setInputs(updatedInputs);
  };

  const handleSubmit = async () => {
    console.log("data ->", inputs);

    const newObject = inputs.map((input) => ({
      name: input.firstname,
      age: input.lastname,
    }));
    try {
      const response = await fetch(
        "https://64393d6f4660f26eb1adef4f.mockapi.io/submitteduserdata",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newObject),
        }
      );

      if (response.ok) {
        const responseObject = await response.json();
        setMyArray([...myArray, responseObject]);
      } else {
        console.error("Failed to add object to the API.");
      }
    } catch (error) {
      console.error("Failed to connect to the API.", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" mt-5 py-2 ">
        <div className="flex flex-col ">
          <div
            className="flex items-center border px-4 space-x-2 w-fit p-1 my-2 cursor-pointer mx-auto"
            onClick={() => add()}
          >
            <div className="text-sm font-bold">ADD MORE</div>
            <BsFillPlusCircleFill size={20} />
          </div>
        </div>

        {state?.map((item: any, index: number) => {
          return (
            <div key={index} className="flex items-center justify-center ml-5">
              <div className="flex items-center justify-center ml-5">
                <input
                  type={"text"}
                  placeholder={"First Name"}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(index, event)
                  }
                  className="border rounded-sm outline-none pl-2 text-sm min-w-[300px] m-3 h-8"
                  value={item.fname}
                  name="firstname"
                />
                <input
                  type={"text"}
                  placeholder={"Last Name"}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(index, event)
                  }
                  className="border rounded-sm outline-none pl-2 text-sm min-w-[300px] m-3 h-8"
                  value={item.lastname}
                  name="lastname"
                />
              </div>
              <AiFillMinusCircle
                type="button"
                size={20}
                onClick={() => handleDelete(index)}
                className="cursor-pointer"
              />
            </div>
          );
        })}
      </div>
      <button
        type="submit"
        className="px-5 py-2 bg-red-700 text-white"
        onClick={() => handleSubmit()}
      >
        Submit
      </button>
    </div>
  );
};

export default SamplePOC;
