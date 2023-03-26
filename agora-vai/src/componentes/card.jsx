
function Card(props) {
  // Determinando a classe CSS com base no tipo de transação (entrada ou saída)
  const typeClass = props.transaction.type === 'entrada' ? 'green' : 'gray';

  // Função para deletar a transação
  function handleDeleteTransaction() {
    props.deleteTransaction(props.index);
  }

  // Renderização do componente Card
  return (
    <section className={`card ${typeClass}`}>
      <div className="type">{props.transaction.type}</div>
      <div className="name">{props.transaction.name}</div>
      <div className="value">R$ {props.transaction.value.toFixed(2)}</div>
      <button className="delete-btn" onClick={handleDeleteTransaction}>Excluir</button>
    </section>
  );
}

export default Card;
