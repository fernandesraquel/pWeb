class DevRaquel extends React.Component {
    render() {
        return (
            <p>Desenvolvido por: Raquel Lima.</p>   
        )
    }
}     
class TabelaBebidas extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div class="align">
                <h1>{this.props.titulo}</h1>
                <table>
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
                <DevRaquel/>
            </div>   
        )
    }     
}
   
ReactDOM.render(
    <TabelaBebidas titulo="Tabela de Cana" />,
    document.getElementById("app")
);