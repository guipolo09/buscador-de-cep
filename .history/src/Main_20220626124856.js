function Main() {
  return (
    <div>
      <main className="main">
        <h2>CEP: {cep.cep}</h2>
        <span>{cep.logradouro}</span>
        <span>{cep.complemento}</span>
        <span>{cep.bairro}</span>
        <span>
          {cep.localidade} - {cep.uf}
        </span>
        <span>DDD: {cep.ddd}</span>
      </main>
    </div>
  );
}
