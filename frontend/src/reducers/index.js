
const initialState = {
  data: [],
};

export const reducer = (state = initialState, action) => {
  if (action.type === 'LOAD_REVENUE_DATA') {
    const {data} = action;
    return {...state, data};
  }
  return state;
};
