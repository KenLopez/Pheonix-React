import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Header, Icon, Segment } from 'semantic-ui-react'
import CartaProveedor from './CartaProveedor';
import NavBar from './NavBar';
const axios = require('axios').default

function CatProveedor() {
    let history = useHistory();
    if (localStorage.getItem('LOGUSER') !== 'true'){
        history.push('/')
    }
    const [data, setData] = useState([])
    const [req, setReq] = useState(false)

    useEffect(() => {
        async function obtener(){
            if(!req){
                let info = []
                setReq(true)
                let res = await axios.get('http://localhost:3000/proveedores')
                info.push(res.data)
                console.log(info[0])
                setData(info[0])
            }
        }
        obtener()
    })
    return (
        <>
        <NavBar default={1}/>
        <div className="Content">
            <div className="ui segment container">
                <Segment>
                    <Header size="huge">
                        <Icon name='cart'/>
                        <Header.Content>Catálogo por Proveedor</Header.Content>
                    </Header>
                </Segment>
                <div className="ui three column link cards row">
                    {data.map((d, index)=>
                            <CartaProveedor
                            Codigo={d.codigo}
                            Nombre={d.nombre}
                            Direccion={d.direccion}
                            Social={d.razonSocial}
                            Telefono={d.telefono}
                            Correo={d.correo}
                            key = {index}
                            />
                        )
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default CatProveedor
