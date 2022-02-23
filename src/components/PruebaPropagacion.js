export const PruebaPropagacion = () => {
    
    const handleChildClick = (e) => {
        e.stopPropagation();
        console.log("Click en el botón hijo");
    }
    return(
        <button onClick={handleChildClick}> Click </button>
        // <button onClick={()=>}> </button>
    )
}