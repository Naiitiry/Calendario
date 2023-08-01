import './Mes.css'
import Dias from "./Dia.jsx"

const Meses = ({monthName})=>{
    const num = Array.from({length:31},(_,index)=>index+1);
    const week = ['D', 'L', 'M', 'Mi', 'J', 'V', 'S'];

    return(
        <>
            <div className='mes'>
                <h2>{monthName}</h2>
                <div className="dias-container">
                    {week.map((week)=>(
                        <h3 key={week}>{week}</h3>
                    ))}
                    {num.map((num,index)=>(
                        <Dias key={`num-${index}`} value={num}/>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Meses