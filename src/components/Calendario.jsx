import Meses from "./Mes.jsx"
import './Calendario.css'
const Almanaque = ()=>{

    const mesesNombres = [
        'Enero','Febrero','Marzo',
        'Abril','Mayo','Junio',
        'Julio', 'Agosto', 'Septiembre', 
        'Octubre', 'Noviembre',
        'Diciembre'
        ];

    return(
        <div className="meses-almanaque">
            {mesesNombres.map((monthName,index)=>(
                <Meses key={`mes-${index}`} monthName={monthName}/>
            ))}
        </div>
    )
}
export default Almanaque