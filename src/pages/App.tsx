import React from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import style from './App.module.scss';


function App() {
  return (
    <div className={style.AppStyle}>
     <Form />
     <List />
     <Timer />
     
    </div>
  );
}

export default App;
