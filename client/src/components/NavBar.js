import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button, Confirm, Header, Menu, Segment } from 'semantic-ui-react'

function NavBar(props) {
    const history = useHistory();
    const [open, setOpen] = useState(false)

    let abrir = () => setOpen(true)
    let cerrar = () => setOpen(false)
    const out = ()=>{
        history.push('/Login')
    }
    return (
        <Segment inverted color='blue' className="Header">
            <Header className='Title' size='small'>
                <center>PHOENIX</center>
            </Header>
            <Menu inverted className='Nav' borderless={true}>
                <Menu.Item as={Link} to={'/Catalogo/Productos'}
                        key={0}
                        name={'Productos'}
                        color={'blue'}
                        borderless={true}
                        active={props.default===0?true:false}
                />
                <Menu.Item as={Link} to={'/Catalogo/Proveedores'}
                        key={1}
                        name={'Proveedores'}
                        color={'blue'}
                        borderless={true}
                        active = {props.default===1?true:false}
                />
                <Menu.Item as={Link} to={'/Catalogo/Bodegas'}
                        key={2}
                        name={'Bodegas'}
                        color={'blue'}
                        borderless={true}
                        active={props.default===2?true:false}
                />
                <Menu.Item as={Link} to={'/NuevoProducto'}
                        key={3}
                        name={'Agregar Producto'}
                        color={'blue'}
                        borderless={true}
                        active={props.default===3?true:false}
                />
                <Menu.Item as={Button}
                    position='right'
                    key={"Logout"}
                    name={"Logout"}
                    color='red'
                    active={true}
                    onClick={abrir}
                />
                <Confirm
                    cancelButton='Cancelar'
                    confirmButton="Cerrar Sesión"
                    open={open}
                    onCancel={cerrar}
                    onConfirm={out}
                    content="¿Seguro que desea salir?"
                    size='mini'
                />
            </Menu>
        </Segment>
    )
}

export default NavBar
