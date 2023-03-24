
import { useState } from 'react';
import List from './componentes/List';
import Form from './componentes/props';
import TotalMoney from './componentes/totalMoney'
import './styles/App.css'; // importa o arquivo CSS para estilização da aplicação
import './styles/teste.css'; // importa outro arquivo CSS para estilização da aplicação


function App() {
  const [listTransactions, setListTransactions] = useState([]); // inicializa o estado listTransactions como um array vazio e setListTransactions é uma função que atualiza o estado

  return (
    <div className="App"> {/* Define a classe do elemento div como "App" */}
      <h1>Teste</h1> {/* Exibe o título "Teste" como um elemento h1 */}

      {/* Renderiza o componente Form, passando listTransactions e setListTransactions como props */}
      <Form listTransactions={listTransactions} setListTransactions={setListTransactions} />

      {/* Renderiza o componente List, passando listTransactions e setListTransactions como props */}
      <List listTransactions={listTransactions} setListTransactions={setListTransactions} />

      {/* Renderiza o componente TotalMoney, passando listTransactions como props */}
      <TotalMoney listTransactions={listTransactions} />
    </div>
  )
}

export default App; // exporta a função App como padrão para que possa ser usada em outros arquivos.



