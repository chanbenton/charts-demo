
// added role parameter based on App.jsx to simplify and match backend
export const loadRevenueData = (role, userId) => dispatch => {
  fetch(`http://localhost:8000/revenue/${role}/${userId}`)
    .then(d => d.json())
    .then(data => dispatch({
      type: 'LOAD_REVENUE_DATA',
      userId,
      data
    }));
};
