import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/action";

const IncDec = () => {
  const dispatch = useDispatch();
  const num1 = useSelector((state: any) => state.counter1);
  const num2 = useSelector((state: any) => state.counter2);

  return (
    <div className="items-center flex justify-evenly mt-10">
      <button
        onClick={() => dispatch(increment())}
        className="border-2 border-black px-3"
      >
        +3
      </button>
      <div>{num1}</div>
      <div>{num2}</div>
      <button
        onClick={() => dispatch(decrement())}
        className="border-2 border-black px-3"
      >
        -3
      </button>
    </div>
  );
};

export default IncDec;
