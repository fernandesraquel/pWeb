const TabelaBebidas = ({titulo, cabecalhos:[cabecalho1, cabecalho2], 
    nomes:[nome1, nome2, nome3, nome4, nome5],
    precos:[preco1, preco2, preco3, preco4, preco5], fonte}) => { 
    return (
        <div class="align">
            <h1>{titulo}</h1>
            <table>
                <thead>
                    <tr><th>{cabecalho1}</th><th>{cabecalho2}</th></tr>
                </thead>
                <tbody>
                    <tr><td>{nome1}</td><td>{preco1}</td></tr>
                    <tr><td>{nome2}</td><td>{preco2}</td></tr>
                    <tr><td>{nome3}</td><td>{preco3}</td></tr>
                    <tr><td>{nome4}</td><td>{preco4}</td></tr>
                    <tr><td>{nome5}</td><td>{preco5}</td></tr>
                </tbody>
            </table>
            <p>{fonte}</p>
        </div>   
    )    
}
const valoresCabecalhos = ["Nome", "Preço (R$)"]
const valoresNomes = ["Petra", "Skol", "Devassa", "Heineken", "Subzero"]
const valoresPrecos = ["2.30", "2.00", "1.50", "3.75", "4.00"]

ReactDOM.render (
    <TabelaBebidas titulo="Minha tabela de cana" cabecalhos={ valoresCabecalhos } nomes={ valoresNomes } precos={ valoresPrecos } fonte="Desenvolvido por: Raquel Lima."/>,
    document.getElementById("app")
);