function Evento({numero}){
    function meuEvento(){
        console.log(`opa, foi ativado! ${numero}`)
    }
    return(

        <>
            <p>Clique para disparar um evento</p>
            <button onClick={meuEvento}>ATIVAR</button>
        </>


    )
}
export default Evento