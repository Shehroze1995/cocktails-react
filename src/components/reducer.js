const reducer = (state, action) => {
  if (action.type == "START_LOADING")
    return { ...state, loading: true, noResult: false };
  if (action.type == "NO_RESULT")
    return { ...state, noResult: true, loading: false };
  if (action.type == "DISPLAY_DATA") {
    return {
      ...state,
      cocktails: action.parameters,
      ordinaryCocktails: [],
      allCocktails: [],
      loading: false,
      page: 1,
    };
  }
  if (action.type == "SHOW_DETAILS") {
    const singleCocktail = state.cocktails.find(
      (item) => item.id == action.parameters
    );
    return { ...state, selectedCocktail: singleCocktail };
  }
  if (action.type == "HANDLED_SEARCH") {
    const inputFormatted = action.parameters
      .replace(/[^a-zA-Z0-9]/gi, "")
      .toLowerCase();
    // console.log(inputFormatted);
    return {
      ...state,
      searchItem: inputFormatted,
      ordinaryCocktails: [],
      allCocktails: [],
    };
  }
  if (action.type == "OPEN_SUBMENU") {
    return {
      ...state,
      isSubmenuOpen: !state.isSubmenuOpen,
    };
  }
  if (action.type == "CLOSE_SUBMENU") {
    return { ...state, isSubmenuOpen: false };
  }
  if (action.type == "ORDINARY_COCKTAILS") {
    return {
      ...state,
      ordinaryCocktails: action.parameters,
      cocktails: [],
      allCocktails: [],
      loading: false,
      page: 1,
    };
  }
  if (action.type == "HANDLED_PAGE") {
    if (action.parameters < 1 || action.parameters > 10) return { ...state };
    else return { ...state, page: action.parameters };
  }
  if (action.type == "SHOW_COCKTAILS") {
    return {
      ...state,
      allCocktails: action.parameters,
      cocktails: [],
      ordinaryCocktails: [],
      loading: false,
      page: 1,
    };
  }
  return state;
};

export default reducer;
