import React from 'react'
import { Card, Grid, Header } from 'semantic-ui-react'

function CartaBodega(props) {
    return (
        <>
        <Card color={props.Activo === 'Inactivo'?'red':'green'}>
            <Card.Content>
            <Card.Header className='cardTitle'><center>{props.Codigo}</center></Card.Header>
            <Grid columns={2}>
                <Grid.Column>
                    <center>
                        <Header sub>Tipo:</Header>
                        <span>{props.Tipo}</span>
                    </center>
                </Grid.Column>
                <Grid.Column>
                    <center>
                        <Header sub>Estado:</Header>
                        <span>{props.Activo}</span>
                    </center>
                </Grid.Column>
            </Grid>
            </Card.Content>
            <Card.Content extra>
                <Grid columns={3}>
                    <Grid.Column>
                        <center>
                            <Header sub>Alto:</Header>
                            <span>{props.Alto}</span>
                        </center>
                    </Grid.Column>
                    <Grid.Column>
                        <center>
                            <Header sub>Ancho:</Header>
                            <span>{props.Ancho}</span>
                        </center>
                    </Grid.Column>
                    <Grid.Column>
                        <center>
                            <Header sub>Profundidad:</Header>
                            <span>{props.Profundidad}</span>
                        </center>
                    </Grid.Column>
                </Grid>
                
            </Card.Content>
        </Card>
        </>
    )
}

export default CartaBodega