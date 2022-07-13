function ListaUsuarios() {
    const usuarios = [
        { id: 1, nome: "Deivid", idade: 27, profissao: "Programador",},
        { id: 2, nome: "Samuel", idade: 25, profissao: "ProPlayer",},
        { id: 3, nome: "Carlito", idade: 17, profissao: "Desempregado"},
        { id: 4, nome: "Joel", idade: 24, profissao: "Desempregado",},
        { id: 5, nome: "Robertinho", idade: 17, profissao: "Jovem Aprendiz"}
    ]

    return (
        <div>
            <h1>Detalhe de Usuário</h1>

        </div>
    )

}

export default ListaUsuarios


{usuarios.map((usuario) =>(
    <ListaUsuarios 
        Nome={usuarios.nome}
        Idade={usuarios.idade}
        Profissão={usuarios.profissao}
    />
))}