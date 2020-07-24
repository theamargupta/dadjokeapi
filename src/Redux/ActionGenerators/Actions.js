import axios from 'axios';
//=> action Generators
export const loading = () => ({
  type: 'loading',
});
export const getJokes = (payload) => ({
  type: 'get_jokes',
  payload,
});
export const error = (payload) => ({
  type: 'error',
  payload,
});

export const fetchJokes = (dispatch) => {
  return (
    // eslint-disable-next-line
    dispatch(loading()),
    axios
      .get('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' },
      })
      .then((res) => dispatch(getJokes(res.data)))
      //.then((res) => res.data.recipes.map((dish) => dispatch(getJokes(dish))))
      .catch((err) => dispatch(error(err)))
  );
};
