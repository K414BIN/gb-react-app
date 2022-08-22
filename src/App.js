import  {useEffect, useRef, useState} from 'react';
import PropTypes from "prop-types";
import './App.css';
import Message from "./components/Message";

function App() {

  const showMessage = true;
  return  (
        <div  className="App">
          {  showMessage ? (
             <Message> </Message>
          ) : (
              <>
              </>
          )}
        </div>
  );
}

export default App;
