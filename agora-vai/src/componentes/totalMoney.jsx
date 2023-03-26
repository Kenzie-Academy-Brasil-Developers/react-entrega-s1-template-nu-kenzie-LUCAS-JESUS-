
function TotalMoney(props) {
  // Calcula o total das transações, somando os valores com reduce()
  const total = props.listTransactions.reduce((acc, cur) => {
    const value = cur.type === 'saida' ? cur.value * -1 : cur.value;
    return acc + value;
  }, 0);

  // Define a classe CSS para a cor do total, baseado no seu sinal (+ ou -)
  const typeClass = total >= 0 ? 'green' : 'gray';

  // Define o valor exibido na tela com ou sem sinal de menos
  let displayValue;
  if (total >= 0) {
    displayValue = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  } else {
    displayValue = '-' + Math.abs(total).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }

  // Retorna um componente que exibe o total de dinheiro com uma cor de acordo com seu sinal
  return (
    <section className={`total-money ${typeClass}`}>
      <div className="container-Resultado-Final">
        <p className="resultado-Final"> Valor Total: </p>
        <p className="total-Money-Quantidade">{displayValue.replace(',', '.')}</p>
      </div>
      <p className="referencia-Do-Valor-Total-Money"> O valor se refere ao saldo</p>
    </section>
  );
}

export default TotalMoney;
