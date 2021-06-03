import React from 'react'
import { Card } from 'semantic-ui-react'

function CartaProveedor(props) {
    return (
        <>
        <Card color='blue'>
            <Card.Content>
            <Card.Meta><span className='date'><b>Código:</b> {props.Codigo}</span></Card.Meta>
            <Card.Header className='cardTitle'><center>{props.Nombre}</center></Card.Header>
            <Card.Description><b>Razón Social:</b> {props.Social}</Card.Description>
            <Card.Description><b>Dirección:</b> {props.Direccion}</Card.Description>
            <Card.Description><b>Dirección:</b> {props.Telefono}</Card.Description>
            <Card.Description><b>Contacto:</b> {props.Correo}</Card.Description>
            </Card.Content>
        </Card>
        </>
    )
}

export default CartaProveedor