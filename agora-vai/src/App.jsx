
import { useState } from 'react';
import List from './componentes/List';
import Form from './componentes/props';
import './styles/App.css';
import './styles/teste.css';

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <section className="App">
      {/* Adicionando o header */}
      <header>
        <nav>
          <div className="logo">
            <img src="./src/img/Nu Kenzie.png" alt="" />
          </div>
        </nav>
      </header>

      {/* Adicionando o nome na div que engloba o card container */}
      <section className="div-Principal">
        <div className="container-Secao-App">

          <div className='conttainer-De-Dados-do-Usuario'>
            <Form listTransactions={listTransactions} setListTransactions={setListTransactions} />
          </div>

          <List listTransactions={listTransactions} setListTransactions={setListTransactions} />

        </div>
      </section>
    </section>
  );
}

export default App;




