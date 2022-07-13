const UsersInfo = ({usuario:{nome, idade, profissao}}) => {
    return (
        <div>
            <h3>Detalhes de Usuários</h3>
            <ul>
                <li>Nome: {nome}</li>
                <li>Idade: {idade}</li>
                <li>Profissao: {profissao}</li>
                <div>Este usuário {idade >= 18 ? "" : "não"} tem a idade nessessaria para fazer a carteira de habilitação.</div>
                </ul>
        </div>
    )
}


export default UsersInfo
