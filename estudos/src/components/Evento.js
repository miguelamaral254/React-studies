import Button from "./Evento/Button"
function Evento() {
    function meuEvento() {
        console.log(`ativando primeiro evento `)
    }

    function segundoEvento() {
        console.log('ativando sgundo evento')
    }


    return (
        <div>            
            <Button event={meuEvento} text="primeiro Evento"/>
            <Button event={segundoEvento} text="segundo evento"/>
            
        </div>

    )
}
export default Evento