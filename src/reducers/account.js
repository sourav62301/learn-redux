import {
  dec,
  getAccUserFulfilled,
  getAccUserPending,
  getAccUserRejected,
  inc,
  incByAmt,
} from "../actions";

export function accountReducer(state = { amount: 0 }, action) {
  switch (action.type) {
    case getAccUserFulfilled:
      return { amount: action.payload, pending: false };
    case getAccUserRejected:
      return { ...state, pending: false };
    case getAccUserPending:
      return { ...state, pending: true };
    case inc:
      return { amount: state.amount + 1 };
    case dec:
      return { amount: state.amount - 1 };
    case incByAmt:
      return { amount: state.amount + action.payload };

    default:
      return state;
  }
}
