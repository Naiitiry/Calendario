import {useState} from "react"
import './HorariosModal.css'

const HorariosModal = ({day, reservas, onClose, onSave})=>{
    
    const [selectedHorario,setSelectedHorario] = useState("00:00");

    const handleHorarioChange = (e) =>{
        setSelectedHorario(e.target.value)
    }

    const handleSave = () => {
        onSave({
            day: day,
            horario: selectedHorario
        })
    }

    return(
        <>
            <div className="modal">
                <div className="modal-content">
                    <h2>Horarios para el día {day}</h2>
                    <div>
                        {
                            reservas.map((reserva, index)=>(
                                <p key={index}>{`${reserva.horario}: ${reserva.descripcion}`}</p>
                            ))
                        }
                    </div>
                    <label htmlFor="horario">Seleccione un horario:</label>
                    <select id="horario" value={selectedHorario} onChange={handleHorarioChange}>
                        {
                            Array.from({length:24}, (_,i)=>i).map((hour)=>(
                                <option key={hour} value={`${hour.toString().padStart(2,"0")}:00`}>
                                    {`${hour.toString().padStart(2,"0")}:00`}
                                </option>
                            ))
                        }
                    </select>
                    <button onClick={handleSave}>Guardar</button>
                    <button onClick={onClose}>Cerrar</button>
                </div>
            </div>
        </>
    )
}
export default HorariosModal