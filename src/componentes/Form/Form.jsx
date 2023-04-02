import { useState } from 'react';
import TotalMoney from '../TotalMoney/TotalMoney';

function Form(props) {
  const [showTotalMoney, setShowTotalMoney] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [transactionType, setTransactionType] = useState('');

  function handleAddTransaction(event) {
    event.preventDefault();
    const nameInput = event.target.elements.name;
    const valueInput = event.target.elements.value;
    const newValue = valueInput.value.replace(".", "").replace(",", ".");
    const newTransaction = {
      name: nameInput.value,
      value: Number(parseFloat(newValue).toFixed(2)),
      type: transactionType,
    };
    props.setListTransactions(prevState => {
      const newListTransactions = prevState.concat(newTransaction);
      return newListTransactions;
    });
    
    nameInput.value = '';
    valueInput.value = '';
    setTransactionType('');
    setShowTotalMoney(true);
  }

  function handleSelectType(type) {
    setTransactionType(type);
    setShowSubMenu(false);
  }

  const isInsertButtonDisabled = !transactionType;

  return (
    <div>
      <form className='for-Principal' onSubmit={handleAddTransaction}>
        <label htmlFor='name' className='Descrição'>Descrição</label>
        <input type="text" id='name' placeholder="Digite sua descrição" />
        <p>Ex: Compra de Roupas</p>
        <div className='container-Para-Valores'>
          <label htmlFor='value' className='for-Valor'>Valor(R$):</label>
          <input type="text" id='value' inputMode="numeric" placeholder='1' step="0.01" />
        </div>

        <div className="dropdown-content">
          <label htmlFor='type' className='dropdown-Content-Titulo'>Tipo de valor:</label>
          <select id='type' value={transactionType} onChange={(event) => handleSelectType(event.target.value)}>
            <option value="Opções"></option>
            <option value='entrada'>Entrada</option>
            <option value='saida'>Saída</option>
          </select>
          <button type='submit' className='inserir' disabled={isInsertButtonDisabled}>Inserir valor</button>
        </div>

      </form>

      {showTotalMoney && <TotalMoney listTransactions={props.listTransactions} />}
    </div>
  );
}

export default Form;
