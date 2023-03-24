
import Card from "./card";
function List(props) {
  // Função para deletar uma transação da lista
  function handleDeleteTransaction(index) {
    // Filtrando a lista de transações para remover a transação com o índice dado
    const newListTransactions = props.listTransactions.filter((transaction, transactionIndex) => {
        return transactionIndex !== index;
      });
      
    // Chamando a função de atualização da lista de transações com a nova lista
    props.setListTransactions(newListTransactions);
  }

  // Renderização da lista de transações
  return (
    <div>
      <h2>Lista de transações:</h2>
      <div className='card-container'>
        {/* Mapeando a lista de transações para gerar um componente Card para cada transação */}
        {props.listTransactions.map((transaction, index) => (
          <Card
            key={index} // Usando o índice como chave, pois não temos um ID único para cada transação
            transaction={transaction}
            index={index}
            deleteTransaction={handleDeleteTransaction} // Passando a função de deletar para o componente Card
          />
        ))}
      </div>
    </div>
  );
}

export default List;
