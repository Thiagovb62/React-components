import Item from "./Item";
function List() {
    return (
        <>
          <h1>Minha lista </h1>
          <ul>
            <Item marca = "mustang" ano_lancamento = {1980} /> 
            <Item  marca = "ferrari" ano_lancamento = {1960}/>
            <Item  marca = "fiat" ano_lancamento= {1960}/>
            <Item/>
          </ul>
        </>
    );
}

export default List;