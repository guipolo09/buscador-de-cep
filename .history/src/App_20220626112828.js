import { FiSearch } from "react-icons/fi";

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite seu CEP..." />
        <button className="buttonSearch">
          <FiSearch size={25} color="#fff" />
        </button>
      </div>
      <main className="main">
        <h2>CEP: 16370-000</h2>
        <span>Av. Bandeirantes</span>
        <span>Complemento</span>
        <span>Vila Rosa</span>
        <span>Promissão - SP</span>
      </main>
    </div>
  );
}

export default App;
