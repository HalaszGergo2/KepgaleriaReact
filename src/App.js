import { useContext } from 'react';
import './App.css';
import KepTer from './components/KepTer';
import { KepContext } from './context/KepContext';
import NagyKep from './components/Nagykep';


function App() {
  const {kepekLista} = useContext(KepContext)
  console.log(kepekLista)
  return (
    <div className="App">
      <header className="App-header">
          <h1>
            Képgaléria
          </h1>
        </header>
      <article className="nagyKep">
        <NagyKep kep={kep}/>
      </article>
      <article className="kepTer">
        <KepTer kepekLista={kepekLista}/>
      </article>
    </div>
  );
}

export default App;
