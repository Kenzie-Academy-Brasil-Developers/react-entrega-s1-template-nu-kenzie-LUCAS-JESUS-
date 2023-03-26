import { useState } from 'react';
import TotalMoney from './totalMoney';

function Form(props) {
  const [showTotalMoney, setShowTotalMoney] = useState(false); // novo estado para controlar a exibição da função TotalMoney
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [transactionType, setTransactionType] = useState('');

  function handleAddTransaction(event) {
    event.preventDefault();
    const nameInput = event.target.elements.name;
    const valueInput = event.target.elements.value;
    const newTransaction = {
      name: nameInput.value,
      value: parseFloat(valueInput.value),
      type: transactionType,
    };
    props.setListTransactions((prevState) => [...prevState, newTransaction]);
    nameInput.value = '';
    valueInput.value = '';
    setTransactionType('');
    setShowTotalMoney(true); // exibe a função TotalMoney após a inserção de uma nova transação
  }

  function handleSelectType(type) {
    setTransactionType(type);
    setShowSubMenu(false);
  }

  const isInsertButtonDisabled = !transactionType;

  return (
    <div>
      <form onSubmit={handleAddTransaction}>
        <label htmlFor='name' className='Descrição'>Descrição</label>
        <input type="text" id='name' placeholder="Digite sua descrição" />
        <p>Ex: Compra de Roupas</p>
        <div className='container-Para-Valores'>
          <label htmlFor='value' className='for-Valor'>Valor(R$):</label>
          <input type="text" id='value' />
        </div>

        <div className="dropdown-content">

          <button type="button" onClick={() => handleSelectType('entrada')}>
            Entrada
          </button>
          <button type="button" onClick={() => handleSelectType('saida')}>
            Saída
          </button>
        <button type='submit' className='inserir' disabled={isInsertButtonDisabled}>Inserir valor</button>
        </div>


      </form>

      {showTotalMoney && <TotalMoney listTransactions={props.listTransactions} />} {/* exibe a função TotalMoney quando showTotalMoney for true */}
    </div>
  );
}



export default Form;
