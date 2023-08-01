import './Mes.css'
import Dias from "./Dia.jsx"

const Meses = ({monthName})=>{
    const num = Array.from({length:31},(_,index)=>index+1);

    return(
        <>
            <div className='mes'>
                <h2>{monthName}</h2>
                <div className="dias-container">
                    {num.map((num,index)=>(
                        <Dias key={`num-${index}`} value={num}/>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Meses