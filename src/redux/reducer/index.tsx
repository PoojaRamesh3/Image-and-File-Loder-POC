import { INCREMENT, DECREMENT } from "../action";

export interface StateProps {
  counter1: number;
  counter2: number;
}

const initialState: StateProps = {
  counter1: 1,
  counter2: 3,
};

const Counter = (state = initialState, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter1: state.counter1 + 3,
        counter2: state.counter2 + 3,
      };
    case DECREMENT:
      return {
        ...state,
        counter1: state.counter1 - 3,
        counter2: state.counter2 - 3,
      };
    default:
      return state;
  }
};
export default Counter;
