import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Header, Icon, Segment } from 'semantic-ui-react'
import CartaProducto from './CartaProducto'
import NavBar from './NavBar'
const axios = require('axios').default

function CatProductos() {
    let history = useHistory()
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
                let res = await axios.get('http://localhost:3000/productos')
                info.push(res.data)
                console.log(info[0])
                setData(info[0])
            }
        }
        obtener()
    })
    return (
        <>
        <NavBar default={0}/>
        <div className="Content">
            <div className="ui segment container">
                <Segment>
                    <Header size="huge">
                        <Icon name='tag'/>
                        <Header.Content>Catálogo de Productos</Header.Content>
                    </Header>
                </Segment>
                <div className="ui three column link cards row">
                        {data.map((d, index)=>
                                <CartaProducto
                                Codigo={d.codigo}
                                Descripcion={d.descripcion}
                                Precio={d.precio}
                                Bodega={d.bodega}
                                Proveedor={d.proveedor}
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

export default CatProductos