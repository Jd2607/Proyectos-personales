import React,{useState} from 'react'
import '../css/material-dashboard.css'
import {Modal, Button} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlassPlus} from '@fortawesome/free-solid-svg-icons'

export function DetallesOrden(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
    

    const orden = props.content
  
    return (
      <>
        <Button variant="info" onClick={handleShow} style={{padding:"10px", marginRight: "5px"}}>
            <FontAwesomeIcon icon={faMagnifyingGlassPlus} style={{fontSize:"13px", margin:"0px"}} />
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Orden #{orden.id}</Modal.Title>
          </Modal.Header>


          <Modal.Body>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <th className="table-active">Numero de orden</th>
                        <th>{orden.id}</th>
                    </tr>
                    <tr>
                        <th className="table-active">Cliente</th>
                        <th>{orden.cliente}</th>
                    </tr>

                    <tr>
                        <th className="table-active">Producto</th>
                        <th>{orden.producto}</th>
                    </tr>

                    <tr>
                        <th className="table-active"><br/><br/>Descripcion</th>
                        <th><textArea rows="4" cols="30" style={{border: "none", textAlign: "center"}} disabled>{orden.descripcion}</textArea></th>
                    </tr>
                    <tr>
                        <th className="table-active">Numero de vehiculos</th>
                        <th>{orden.vehiculos}</th>
                    </tr>
                    <tr>
                        <th className="table-active">Origen</th>
                        <th>{orden.origen}</th>
                    </tr>

                    <tr>
                        <th className="table-active">Destino</th>
                        <th>{orden.destino}</th>
                    </tr>

                    <tr>
                        <th className="table-active">Estado de la orden</th>
                        <th>{orden.estado}</th>
                    </tr>

                    <tr className="detalle">
                        <th className="table-active">Valor a pagar</th>
                        <th>{orden.valor}</th>
                    </tr>
                    <tr>
                        <th className="table-active">Distancia(Km)</th>
                        <th>{orden.distancia}</th>
                    </tr>
                </tbody>
            </table>
          </Modal.Body>


          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}