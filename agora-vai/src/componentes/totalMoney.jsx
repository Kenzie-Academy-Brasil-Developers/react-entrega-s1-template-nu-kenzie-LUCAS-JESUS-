function TotalMoney(props) {
    // Calcula o total das transações, somando os valores com reduce()
    const total = props.listTransactions.reduce((acc, cur) => acc + cur.value, 0);

    // Define a classe CSS para a cor do total, baseado no seu sinal (+ ou -)
    const typeClass = total >= 0 ? 'green' : 'gray';

    // Retorna um componente que exibe o total de dinheiro com uma cor de acordo com seu sinal
    return (
        <div className={`total-money ${typeClass}`}>
            <p>Total: {total.toFixed(2)}</p>
        </div>
    );
}


export default TotalMoney