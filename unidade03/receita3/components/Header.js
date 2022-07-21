export function Header() {
    return (
        <div className="container">
            <h1><strong>search</strong>movies</h1>
            <style jsx>{`
            .container {
                padding: 20px;
                display: flex;
                justify-content: center;
                align-itens: center;
                box-sizing: border-box; 
                font-family: "Fira Sans", sans-serif;
            }
            h1 {
                font-size: 40px;
                text-transform: uppercase;
                color: #171717;
                
            }
            strong {
                color: #EDEDED;
            }
            `}</style>
        </div>
    )
}