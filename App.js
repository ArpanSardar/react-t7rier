import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Home from './Components/Home';
import SignIn from './Components/SignIn';

function App() {
  return (
    <Provider store={store}>
    <div className='container'>
      <Home/>
    </div>
    </Provider>
  );
}

export default App;