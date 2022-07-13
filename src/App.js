import './App.css';
import UsersInfo from './components/UsersInfo';

function App() {
  const users = [
    { id: 1, nome: "Deivid", idade: 27, profissao: "Programador",},
    { id: 2, nome: "Samuel", idade: 25, profissao: "ProPlayer",},
    { id: 3, nome: "Carlito", idade: 16, profissao: "Desempregado"},
    { id: 4, nome: "Joel", idade: 24, profissao: "Desempregado",},
    { id: 5, nome: "Robertinho", idade: 17, profissao: "Jovem Aprendiz"}
  ]

  return (
    <div className="App">
      <h1>Detalhe de Usuário</h1>
      {users.map((usuario) => (
        <UsersInfo usuario={usuario}/>
      ))}
    </div>
  );
}

export default App;
