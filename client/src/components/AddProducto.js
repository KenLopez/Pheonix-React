import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Button, Form, Header, Segment, TransitionablePortal, Icon } from 'semantic-ui-react'
import NavBar from './NavBar'
const axios = require('axios').default

function AddProducto() {
    let history = useHistory()
    if (localStorage.getItem('LOGUSER') !== 'true'){
        history.push('/')
    }
    const [codigo, setCodigo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [precio, setPrecio] = useState(0)
    const [proveedor, setProveedor] = useState('')
    const [bodega, setBodega] = useState('')
    const [errAbrir, setErrOpen] = useState(false)
    const [message, setMessage] = useState("")

    function add(){
        async function enviar(){
            let res = await axios.post('http://localhost:3000/add', {codigo:codigo,descripcion:descripcion,precio:precio,proveedor:proveedor,bodega:bodega})
            console.log(res.data)
            if(res.data === 'ok'){
                setMessage('Producto agregado correctamente.')
            }else{
                setMessage('Ha ocurrido un error, datos incorrectos.')
            }
            setErrOpen(true)
        }
        enviar();
    }

    let errClose = () => setErrOpen(false)
    return (
        <>
        <NavBar
        default={3}
        />
        <div className="Content">
            <div className="ui segment container">
                <Segment>
                    <Header size="huge">
                        <Icon name='add circle'/>
                        <Header.Content>Agregar Producto</Header.Content>
                    </Header>
                </Segment>
                    <Form onSubmit={add}>
                        <Form.Field>
                            <label>Código del producto:</label>
                            <input required type='text' size="big" placeholder="Codigo..." onChange={ (e)=>{
                                            setCodigo(e.target.value)}}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Descripción del producto:</label>
                            <textarea required type='text' size="big" placeholder="Descripción..." onChange={ (e)=>{
                                            setDescripcion(e.target.value)}}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Precio del producto:</label>
                            <input required type='number' size="big" placeholder="0" min={0} onChange={ (e)=>{
                                            setPrecio(e.target.value)}}/>
                        </Form.Field>
                        <Form.Group widths='equal'>
                            <Form.Input fluid label='Código de Proveedor:' placeholder='Proveedor...' onChange={(e)=>{
                                        setProveedor(e.target.value)
                            }}/>
                            <Form.Input fluid label='Código de Bodega:' placeholder='Bodega...' onChange={(e)=>{
                                        setBodega(e.target.value)}}/>
                        </Form.Group>
                        <center><Button type="submit" color="green" size="big">Añadir Nuevo Producto</Button></center>
                    </Form>
            </div>
        </div>
        <TransitionablePortal
        open={errAbrir}
        onClose={errClose}>   
        <Segment
        style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}
        >
        <p>{message}</p>
        </Segment>
        </TransitionablePortal>
    </>
    )
}

export default AddProducto
