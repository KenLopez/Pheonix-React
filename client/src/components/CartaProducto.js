import React from 'react'
import { Card, Grid, Header } from 'semantic-ui-react'

function CartaProducto(props) {
    return (
        <>
        <Card color='blue'>
            <Card.Content>
            <Card.Header className='cardTitle'><center>{props.Codigo}</center></Card.Header>
            <Card.Description>{props.Descripcion}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Grid columns={3}>
                    <Grid.Column>
                        <center>
                            <Header sub>Precio:</Header>
                            <span>Q {props.Precio}</span>
                        </center>
                    </Grid.Column>
                    <Grid.Column>
                        <center>
                            <Header sub>Proveedor:</Header>
                            <span>{props.Proveedor}</span>
                        </center>
                    </Grid.Column>
                    <Grid.Column>
                        <center>
                            <Header sub>Bodega:</Header>
                            <span>{props.Bodega}</span>
                        </center>
                    </Grid.Column>
                </Grid>
                
            </Card.Content>
        </Card>
        </>
    )
}

export default CartaProducto
