export function SearchMovie() {

    return (
        <div className="container">
           <input
                id="search"
                type="text"
                autocomplete="off"
                placeholder="Title or year..."
           /> 
        <style jsx>{`
            .container {
                padding: 20px;
                display: flex;
                justify-content: center;
                align-itens: center;
                box-sizing: border-box; 
                font-family: "Fira Sans", sans-serif;
            }
            input {
                border: 1px solid #EDEDED;
                outline: none;
                font-size: 16px;
                border-radius: 5px;
                padding: 10px 16px;
                width: 30%;
                
            }
            input:focus::-webkit-input-placeholder {
                opacity: 0;
            }
            input:focus::-moz-placeholder {
                opacity: 0;
            }
            input:focus:-ms-input-placeholder {
                opacity: 0;
            }
            input:focus:-moz-placeholder {
                opacity: 0;
            }
            `}</style>

        </div>
    )
}

