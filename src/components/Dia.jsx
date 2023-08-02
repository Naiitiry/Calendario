import './Dia.css'
const Dias = ({value, onClick})=>{
    return (
    <div className="dias" onClick={()=>onClick(value)}>
        <div className='dia-numero'>{value}</div>
    </div>
    )
}
export default Dias