
function Card(props) {
    // Determinando a classe CSS com base no tipo de transação (entrada ou saída)
    let typeClass;
    if (props.transaction.type === 'entrada') {
        typeClass = 'green';
    } else {
        typeClass = 'gray';
    }

    // Função para deletar a transação
    function handleDeleteTransaction() {
        props.deleteTransaction(props.index);
    }

    // Renderização do componente Card
    return (
        <div className={`card ${typeClass}`}>
            <div className="type">{props.transaction.type}</div>
            <div className="name">{props.transaction.name}</div>
            <div className="value">R$ {props.transaction.value.toFixed(2)}</div>
            <button className="delete-btn" onClick={handleDeleteTransaction}>Excluir</button>
        </div>
    );
}

export default Card;
