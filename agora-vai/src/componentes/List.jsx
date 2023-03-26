
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
    <section className="container-Principal-Da-Lista">
      <h2>Resumo Financeiro</h2>
      <div className='card-container'>
        {/* Mapeando a lista de transações para gerar um componente Card para cada transação */}
        {props.listTransactions.map((transaction, index) => (
          <Card
            transaction={transaction}
            key={index} // Usando o índice como chave, pois não temos um ID único para cada transação
            index={index}
            deleteTransaction={handleDeleteTransaction} // Passando a função de deletar para o componente Card
          />
        ))}
      </div>
    </section>
  );
}

export default List;
