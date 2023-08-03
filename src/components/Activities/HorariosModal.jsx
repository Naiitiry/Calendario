import {useState} from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const HorariosModal = ({day, reservas, onClose, onSave})=>{
    
    const [selectedHorario,setSelectedHorario] = useState("00:00");
    const [show,setShow] = useState(true)
    const [descripcion,setDescripcion] = useState('')

    const handleHorarioChange = (e) =>{
        setSelectedHorario(e.target.value)
    }
    const handleDescripcion = (e) =>{
        setDescripcion(e.target.value)
    }
    const handleClose = () => setShow(false);

    const handleSave = () => {
        onSave({
            day: day,
            horario: selectedHorario,
            descripcion: descripcion
        })
    }

    return(
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Horarios para el día {day}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        {
                            reservas.map((reserva, index)=>(
                                <p key={index}>{`${reserva.horario}: ${reserva.descripcion}`}</p>
                            ))
                        }
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
                    <input id="descripcion" type="text" onChange={handleDescripcion} placeholder="descripcion"/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleSave}>Guardar</Button>
                        <Button variant="danger" onClick={onClose}>Cerrar</Button>
                    </Modal.Footer>
            </Modal>
        </>
    )
}
export default HorariosModal