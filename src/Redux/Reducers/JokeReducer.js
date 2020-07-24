//=> reducers
const initialState = {
  jokes: [],
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'loading':
      return {
        loading: true,
        jokes: [...state.jokes],
      };
    case 'get_jokes':
      return {
        loading: false,
        jokes: [...state.jokes, payload],
      };
    case 'error':
      return {
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
