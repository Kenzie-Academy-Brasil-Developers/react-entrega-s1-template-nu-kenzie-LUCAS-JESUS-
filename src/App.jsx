
import { useState } from 'react';
import Form from './componentes/Form/Form';
import List from './componentes/Lista/List';
import img from './assets/logo.svg';
import './styles/App.css';
import './styles/teste.css';

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <section className="App">
    
      <header>
        <nav>
          <div className="logo">
          <img src={img} alt="" />
          </div>
        </nav>
      </header>

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




