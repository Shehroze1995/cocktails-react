import React, { useCallback, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

const AppContext = React.createContext();

const initialState = {
  cocktails: [],
  selectedCocktail: {},
  searchItem: "margarita",
  loading: true,
  noResult: false,
  isSubmenuOpen: false,
  ordinaryCocktails: [],
  page: 1,
  allCocktails: [],
};

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = useCallback(async () => {
    dispatch({ type: "START_LOADING" });
    try {
      let data = await fetch(url + state.searchItem);
      data = await data.json();
      const { drinks } = data;
      if (!drinks) {
        dispatch({ type: "NO_RESULT" });
        return;
      }
      const updatedDrinks = drinks.map((item) => {
        return {
          name: item.strDrink,
          id: item.idDrink,
          image: item.strDrinkThumb,
          category: item.strCategory,
          alcoholic: item.strAlcoholic,
          glass: item.strGlass,
          instructions: item.strInstructions,
          ingredients: [
            item.strIngredient1,
            item.strIngredient2,
            item.strIngredient3,
            item.strIngredient4,
            item.strIngredient5,
          ].filter((item) => {
            if (item) return item;
          }),
        };
      });
      dispatch({ type: "DISPLAY_DATA", parameters: updatedDrinks });
    } catch (error) {
      console.log(error);
    }
  }, [state.searchItem]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const showDetails = (id) =>
    dispatch({ type: "SHOW_DETAILS", parameters: id });

  const handledSearch = (e, ref) => {
    e.preventDefault();
    if (!ref.trim()) return;
    dispatch({ type: "HANDLED_SEARCH", parameters: ref });
  };

  const fetchCategories = async () => {
    try {
      dispatch({ type: "START_LOADING" });
      let data = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink`
      );
      data = await data.json();
      data = data.drinks.map((item) => {
        return {
          id: item.idDrink,
          name: item.strDrink,
          img: item.strDrinkThumb,
        };
      });
      dispatch({ type: "ORDINARY_COCKTAILS", parameters: data });
    } catch (error) {
      console.log(error);
    }
  };

  const openSubmenu = () => dispatch({ type: "OPEN_SUBMENU" });
  const closeSubmenu = () => dispatch({ type: "CLOSE_SUBMENU" });

  const handledPage = (selectedPage) => {
    dispatch({ type: "HANDLED_PAGE", parameters: selectedPage });
    window.scrollTo(0, 0);
  };

  const fetchCocktails = async () => {
    try {
      dispatch({ type: "START_LOADING" });
      let res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`
      );
      res = await res.json();
      if (res) {
        res = res.drinks;
        res = res.map((item) => {
          return {
            id: item.idDrink,
            name: item.strDrink,
            img: item.strDrinkThumb,
          };
        });
        dispatch({ type: "SHOW_COCKTAILS", parameters: res });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        showDetails,
        handledSearch,
        openSubmenu,
        closeSubmenu,
        fetchCategories,
        handledPage,
        fetchCocktails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobally = () => useContext(AppContext);
