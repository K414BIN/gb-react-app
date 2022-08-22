import  {useEffect, useRef, useState} from 'react';
import Button from '@mui/material/Button';
import PropTypes from "prop-types";
import './App.css';

function App() {

  const showMessage = true;
  return  (
        <div  className="App">
          {  showMessage ? (
              <>
              </>
          ) : (
              <>
              </>
          )}
        </div>
  );
}

export default App;
