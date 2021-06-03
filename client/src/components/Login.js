import {React, useState} from 'react'
import { useHistory } from 'react-router'
import { Button, Form, Header, Icon, Input, Segment, TransitionablePortal } from 'semantic-ui-react'
const axios = require('axios').default

function AddProducto() {
    localStorage.clear()
    const [codigo, setCodigo] = useState('')
    const [clave, setClave] = useState('')
    const [errAbrir, setErrOpen] = useState(false)
    const [message, setMessage] = useState('')
    let history = useHistory()

    let errClose = () => setErrOpen(false)

    const ingresar = ()=>{
        async function request(){
            let res = await axios.post('http://localhost:3000/Login', {codigo:codigo,clave:clave})
            if (res.data){
                localStorage.setItem("LOGUSER", true)
                history.push('/Catalogo')
            }else{
                setMessage('Error en las credenciales')
                setErrOpen(true)
            }
        }
        request()
    }
    return (
        <>
        <Segment inverted color='blue' className="Header">
            <Header className="Title" size='large'>
                <center>PHOENIX</center>
            </Header>
        </Segment>
        <div className="Content Login">
            <div className="ui segment container">
                <Segment>
                    <Header size="huge">
                        <Icon name='user'/>
                        <Header.Content>Login</Header.Content>
                    </Header>
                </Segment>
                <center>
                    <Form onSubmit={ingresar}>
                        <Input icon='address card' iconPosition='left' size="big" placeholder="Código..." onChange={ (e)=>{
                                            setCodigo(e.target.value)}}/>
                        <br/><br/>
                        <Input type='password' icon='key' iconPosition='left' size="big" placeholder="Contraseña..." onChange={ (e)=>{
                                            setClave(e.target.value)}}/>
                        <br/><br/>
                        <Button type="submit" color="blue" size="big">Entrar</Button>
                    </Form>
                </center>
            </div>
        </div>
        <TransitionablePortal
            open={errAbrir}
            onClose={errClose}
        >   
            <Segment
            style={{ left: '44%', position: 'fixed', top: '42%', zIndex: 1000 }}
            >
            <Header>Error</Header>
            <p>{message}</p>
            </Segment>
        </TransitionablePortal>
        </>
    )
}

export default AddProducto
