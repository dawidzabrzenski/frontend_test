import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import { useState, useReducer } from "react";
import jsonData from "../data/data.json";

const initialState = {
  items: [],
  currentOption: null,
  text: "Użyj opcji Dodaj lub Doklej",
};

function getItemByOption(option) {
  switch (option) {
    case null:
      return { text: "Wybierz opcje" };
    case "1":
      return jsonData[0];
    case "2":
      return jsonData[1];
    default:
      const randomIndex = 2 + Math.floor(Math.random() * (jsonData.length - 2));
      return jsonData[randomIndex];
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "setCurrentOption":
      return {
        ...state,
        currentOption: action.payload,
      };

    case "replaceAll":
      return {
        ...state,
        items: [getItemByOption(state.currentOption)],
      };

    case "insertValue":
      const newItem = getItemByOption(state.currentOption);

      if (state.items.some((item) => item.id === newItem.id)) {
        return state;
      }

      return {
        ...state,
        items: [...state.items, newItem],
      };

    case "deleteItem":
      const deleteItemIndex = state.items.filter(
        (item, index) => item.id !== state.items[index].id
      );
      return {
        items: [...deleteItemIndex, getItemByOption(state.currentOption)],
      };

    case "resetAll":
      return {
        ...initialState,
      };

    default:
      return state;
  }
}

function App() {
  const [nameVisible, setNameVisible] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [data, setData] = useState(jsonData);

  return (
    <div>
      <Header nameVisible={nameVisible} />
      <MainSection
        dispatch={dispatch}
        state={state}
        data={data}
        setData={setData}
      />
      <Footer
        nameVisible={nameVisible}
        setNameVisible={setNameVisible}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
