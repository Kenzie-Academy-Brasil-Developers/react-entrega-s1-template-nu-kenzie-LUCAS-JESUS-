import Card from "./card";

function List(props) {
  return (
    <section className="container-Principal-Da-Lista">
      <h2 className="h2-list-Titulo">Resumo Financeiro</h2>
      {getTransactionList()}

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

  function getTransactionList() {
    if (props.listTransactions.length === 0) {
      return <h3 className="list-H3-Para-Nenhuma-Transacao">Você ainda não possui nenhum lançamento</h3>;
    } else {
      return null;
    }
  }

  // Função para deletar uma transação da lista
  function handleDeleteTransaction(index) {
    // Filtrando a lista de transações para remover a transação com o índice dado
    const newListTransactions = props.listTransactions.filter((transaction, transactionIndex) => {
      return transactionIndex !== index;
    });

    // Chamando a função de atualização da lista de transações com a nova lista
    props.setListTransactions(newListTransactions);
  }
}

export default List;
