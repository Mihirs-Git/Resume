import React from 'react';
import './App.css';
import Main  from "./components/MainComponent";
import { BrowserRouter } from 'react-router-dom';
import { ConfigureStore } from './redux/configureStore';
import { Provider } from 'react-redux';

const store = ConfigureStore();

function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <Main></Main>
          </BrowserRouter>
        </Provider>
      </div>
  );
}

export default App;
