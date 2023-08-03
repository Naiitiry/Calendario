import './Mes.css'
import Dias from "./Dia.jsx"
import HorariosModal from './Activities/HorariosModal.jsx';
import {useState, useEffect} from 'react';

const Meses = ({monthName})=>{
    const num = Array.from({length:31},(_,index)=>index+1);
    const week = ['D', 'L', 'M', 'Mi', 'J', 'V', 'S'];

    const [modalOpen,setModalOpen] = useState(false);
    const [selectedDay, setSelectedDay] = useState(null);
    const [reservas, setReservas] = useState([])

    const handleDayClick = (day)=>{
        setSelectedDay(day);
        setModalOpen(true)
    }

    const handleModalClose = ()=>{
        setModalOpen(false)
    }

    const handleSaveReserva =(reserva)=>{
        setReservas([...reservas,reserva])
    }

    return(
        <>
            <div className='mes'>
                <h2>{monthName}</h2>
                <div className="dias-container">
                    {week.map((week)=>(
                        <h3 key={week}>{week}</h3>
                    ))}
                    {num.map((num,index)=>(
                        <Dias key={`num-${index}`} value={num} onClick={handleDayClick}/>
                    ))}
                </div>
            </div>
            {modalOpen &&(
                <HorariosModal
                day={selectedDay}
                reservas={reservas.filter((reserva) => reserva.day === selectedDay)}
                onClose={handleModalClose}
                onSave={handleSaveReserva}
                />
            )}
        </>
    )
}
export default Meses