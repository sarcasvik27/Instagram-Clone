const initialState = {
  users: [],
};
const Counter = (state = initialState, action) => {
  switch (action.type) {
    case 'POSTS':
      return {
        users: action.payload,
      };
    default:
      return state;
  }
};
export default Counter;
