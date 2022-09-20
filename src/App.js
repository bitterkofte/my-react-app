import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";
import { useState } from 'react';
import { Button } from '@mantine/core';

//let arr = ["Dağ 1", "Dağ 2", "Dağ 3", "Dağ 4"];

let dizi = [
  { //object
    id:1,
    title: "Dağ 1",
    par: "Açıklama 1"
  },
  {
    id:2,
    title: "Dağ 2",
    par: "Açıklama 2"
  },
  {
    id:3,
    title: "Dağ 3",
    par: "Açıklama 3"
  },
];

/*
//function
function kare(sayi) {
  return sayi*sayi;
}
*/

/*
//arrow function
const kare = (sayi) => {
  return sayi*sayi;
}
*/

//without return
const kare = (sayi) => sayi*sayi;

/*
function App() {
  console.log("kare hesaplama", kare(5));
  return (
  <div>
    <h1>Başlık</h1>
    <p>Başlangıç</p>
    <div className='Cards'>
      {dizi.map(function({title, par})
      { //bu süslü parantez başka değişkenlerin olması durumunda gerekli
        return <Card title={title} par={par}/>;
      })}
    </div>
    
  </div> 
  );
}
*/
let dag = [1,2,3];
let ic=0;

const App = () => {
  const [val, setVal] = useState(11);
  return (
    <div>
      <h1>Schedule Planning</h1>
      <Button>Mantine</Button>

      <div>
        <p>{ic}</p>
        <button onClick={() => {
          if (ic < 3){
          ic = ic + 1;
          }
        }}>next</button>
        <button onClick={() => {
          if (ic > 0){
          ic = ic - 1;
          }
        }}>prev</button>
        <p>{ic}</p>
      </div>

      <h2>Lesson {val}</h2>

      <button onClick={() => {
        setVal(val+1);
      }}>Add</button>

      <button onClick={() => {
        if(val!==0){
        setVal(val-1);}
      }}>Remove</button>

      <button onClick={() => {
        setVal(0);
      }}>Reset</button>

      <p>Başlangıç</p>

      <div className='Cards'>
        {dizi.map(function({id, title, par})
        { 
          return <Card keys={id} title={title} par={par} lesson={val}/>;
        })}
      </div>
      
    </div> 
    );
}

export default App;
