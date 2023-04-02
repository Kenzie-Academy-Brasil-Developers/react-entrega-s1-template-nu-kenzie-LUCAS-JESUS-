import Card from "../Card.jsx/Card";

function List(props) {
  return (
    <section className="container-Principal-Da-Lista">
      <h2 className="h2-list-Titulo">Resumo Financeiro</h2>
      {getTransactionList()}

      <div className='card-container'>
        {props.listTransactions.map((transaction, index) => (
          <Card
            transaction={transaction}
            key={index} 
            index={index}
            deleteTransaction={handleDeleteTransaction} 
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

  function handleDeleteTransaction(index) {
    const newListTransactions = props.listTransactions.filter((transaction, transactionIndex) => {
      return transactionIndex !== index;
    });

    props.setListTransactions(newListTransactions);
  }
}

export default List;
