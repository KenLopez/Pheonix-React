import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Header, Icon, Segment } from 'semantic-ui-react'
import CartaBodega from './CartaBodega'
import NavBar from './NavBar'
const axios = require('axios').default

function CatBodega() {
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
                let res = await axios.get('http://localhost:3000/bodegas')
                info.push(res.data)
                console.log(info[0])
                setData(info[0])
            }
        }
        obtener()
    })
    return (
        <>
        <NavBar default={2}/>
        <div className="Content">
            <div className="ui segment container">
                <Segment>
                    <Header size="huge">
                        <Icon name='truck'/>
                        <Header.Content>Catálogo por Bodega</Header.Content>
                    </Header>
                </Segment>
                <div className="ui three column link cards row">
                    {data.map((d, index)=>
                            <CartaBodega
                            Codigo={d.codigo}
                            Tipo={d.tipo}
                            Activo={d.activa?'Activo':'Inactivo'}
                            Alto={d.alturaPromedio}
                            Ancho={d.anchuraPromedio}
                            Profundidad={d.profundidadPromedio}
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

export default CatBodega
