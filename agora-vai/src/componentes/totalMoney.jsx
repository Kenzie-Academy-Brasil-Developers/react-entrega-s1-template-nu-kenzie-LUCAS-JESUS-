function TotalMoney(props) {
  const total = props.listTransactions.reduce((acc, cur) => {
    const value = cur.type === 'saida' ? cur.value * -1 : cur.value;
    return acc + value;
  }, 0);

  const typeClass = total >= 0 ? 'green' : 'gray';

  let displayValue;
  if (total >= 0) {
    displayValue = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  } else {
    displayValue = '-' + Math.abs(total).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }

  return (
    <section className={`total-money ${typeClass}`}>
      <div className="container-Resultado-Final">
        <p className="resultado-Final"> Valor Total: </p>
        <p className="total-Money-Quantidade">{displayValue}</p>
      </div>
      <p className="referencia-Do-Valor-Total-Money"> O valor se refere ao saldo</p>
    </section>
  );
}

export default TotalMoney;
