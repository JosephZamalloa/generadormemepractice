import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

    const [linea1, setLinea1] = useState ('')
    const [linea2, setLinea2] = useState ('')
    const [imagen, setImagen] = useState ('') 

    const onChangeLinea1 =function(evento) {
        setLinea1(evento.target.value)
    }

    const onChangeLinea2 =function(evento) {
      setLinea2(evento.target.value)
  }
    const onChangeImagen =function(evento){
      setImagen(evento.target.value)
    }

    const onClickExportar = function(evento){
      html2canvas(document.querySelector("#meme")).then(canvas => {
        var img = canvas.toDataURL("image/png")
        var link =document.createElement('a')
        link.download='meme.png';
        link.href=img
        link.click() 

    });
    }

    

  return (
    <div className="App">

      <select onChange={onChangeImagen}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Filosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select> <br/>

    <input onChange={onChangeLinea1} type="text" placeholder='Arriba' /> <br/>
    <input onChange={onChangeLinea2} type="text" placeholder='Abajo' /> <br/>
    <button onClick={onClickExportar}>Exportar</button>
      
      
      <div id='meme'>
          <span className="linea1">{linea1}</span> <br/>
          <span className="linea2">{linea2}</span> <br/>
          <img src={'/img/'+ imagen + '.jpg'}></img>
      </div>

        

    </div>
  );

}

export default App;
