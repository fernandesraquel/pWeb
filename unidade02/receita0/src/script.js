ReactDOM.render(

    React.createElement('table', {id: 'tabela', border:'1'},
        React.createElement(
            'tr',
            null,
            React.createElement('th', null, 'nome'),
            React.createElement('th', null, 'Marca'),
        ),
        React.createElement(
            'tr',
            null,
            React.createElement('td', null, 'Havana'),
            React.createElement('td', null, 'Santiago'),
        )
    ),
    document.getElementById("app"))