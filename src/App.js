import React from 'react';
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import * as reducers from "./state/reducers";

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const monsterReducer = combineReducers({
  additionalPrice: reducers.priceReducer,
  car: reducers.carReducer,
  store: reducers.storeReducer,
});

const reduxStore = createStore(
  monsterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const App = () => {
  return (
    <Provider store={reduxStore}>
      <div className="boxes">
        <div className="box">
          <Header />
          <AddedFeatures  />
        </div>
        <div className="box">
          <AdditionalFeatures />
          <Total />
        </div>
      </div>
    </Provider>
  );
};

export default App;
