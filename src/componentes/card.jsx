function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Card(props) {
  // Determinando a classe CSS com base no tipo de transação (entrada ou saída)
  const typeClass = props.transaction.type === 'entrada' ? 'green' : 'gray';

  // Formatando o valor da transação para o formato desejado
  const value = props.transaction.value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Função para deletar a transação
  function handleDeleteTransaction() {
    props.deleteTransaction(props.index);
  }

  // Renderização do componente Card
  return (
    <section className={`card ${typeClass}`}>
      <div className="card-Container-Objeto-Entrada">
        <div className="card-Nome-Do-Objeto">{props.transaction.name}</div>
        <div className="card-Tipo-De-Entrada">{capitalizeFirstLetter(props.transaction.type)}</div>
      </div>
      <div className="container-Card-Valor-Deletor">
        <div className="card-Valor-Do-Objeto">R$ {value}</div>
        <button className="card-Botão-Deletor" onClick={handleDeleteTransaction}>Excluir</button>
      </div>
    </section>
  );
}
export default Card;
