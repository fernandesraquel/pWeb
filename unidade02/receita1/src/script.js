function MyTable() {
    const maxWidth = {
        fontSize: '1rem'
    }
    .striped = {
        maxWidth: '30%',
        marginLeft: '35%',
        marginRigth: '25%'
    }
    function Cabecalho() {
        return ('- Minha Tabela de Bebidas -')
    }
    return (    
        <div>
            <h1>{Cabecalho()}</h1>
            <table class="striped" style={maxWidth}>
                <thead>
                    <tr><th>Name</th><th>Preço (R$)</th></tr>
                </thead>
                <tbody>
                    <tr><td>Petra</td><td>2.30</td></tr>
                    <tr><td>Skol</td><td>2.00</td></tr>
                    <tr><td>Devassa</td><td>1.50</td></tr>
                    <tr><td>Heineken</td><td>3.75</td></tr>
                    <tr><td>Subzero</td><td>4.00</td></tr>
                </tbody>
            </table>
        </div>
    )
}

ReactDOM.render(
    <MyTable />,
    document.getElementById("app")
);