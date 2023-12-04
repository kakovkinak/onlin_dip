import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import ShoesStore from "./store/ShoesStore";

export const Context = createContext(null)


ReactDOM.render(
        <Context.Provider value={{
            user: new UserStore(),
            shoes: new ShoesStore(),
        }}>
            <App />,
        </Context.Provider>,
  document.getElementById('root')
);


