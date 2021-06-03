import React from 'react'

function logout() {
    const [open, setOpen] = useState(false)
    let abrir = () => setOpen(true)
    let cerrar = () => setOpen(false)
    if (props.yes){
        return(
            <>
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
                    confirmButton="Salir de Virtual Mall"
                    open={open}
                    onCancel={cerrar}
                    onConfirm={props.out}
                    content="¿Seguro que desea salir?"
                    size='mini'
                />
            </>
        )
    }else{
        return <></>
    }
}

export default logout
