import { createStore } from "redux";

export const MULTIPLY = "MULTIPLY";
export const DIVIDE = "DIVIDE";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

const reducer = (state, action) => {
  switch (action.type) {
    case MULTIPLY:
      return {
        ...state,
        count: state.count * 2,
      };
    case DIVIDE:
      return {
        ...state,
        count: state.count / 2,
      };
    case INCREMENT:
      return {
        ...state,
        count: state.count + 2,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 2,
      };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
};

export const store = createStore(reducer, initialState);
