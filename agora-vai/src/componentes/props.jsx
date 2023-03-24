import React from 'react';

function Form(props) {
  // Função para adicionar uma nova transação
  function handleAddTransaction(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Obtém os valores dos campos de entrada
    const nameInput = event.target.elements.name;
    const valueInput = event.target.elements.value;

    // Cria um objeto com as informações da nova transação
    const newTransaction = {
      name: nameInput.value,
      value: parseFloat(valueInput.value),
      type: valueInput.value > 0 ? 'entrada' : 'saida',
    };

    // Adiciona a nova transação à lista de transações
    props.setListTransactions((prevState) => [...prevState, newTransaction]);

    // Limpa os campos de entrada após a adição de uma nova transação
    nameInput.value = '';
    valueInput.value = '';
  }

  // Renderização do componente Form
  return (
    <form onSubmit={handleAddTransaction}>
      <label htmlFor='name'>Nome:</label>
      <input type="text" id='name' />
      <label htmlFor='value'>Valor:</label>
      <input type="text" id='value' />
      <button type='submit'>Adicionar transação</button>
    </form>
  );
}

export default Form;
