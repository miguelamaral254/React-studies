import Item from "./Item"
function List() {
    return (
        <>
        <h1>Minha lista</h1>
        <ul>
            <Item marca="Ferrari" anoLancamento={1985}/>
            <Item marca="Fiat" anoLancamento={1964}/>
            <Item marca="Renault" anoLancamento={1954}/>
            
        </ul>
        </>
    )
}
export default List