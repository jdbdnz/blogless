const setFilter = (state, { payload: filter }) => {
  return state.set("filter", filter || "");
};

export default setFilter;
