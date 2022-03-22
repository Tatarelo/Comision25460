import { useState } from "react"
import { useEffect } from "react"

export const ControlledInput = () => {
    const [dataForm, setDataForm] = useState({texto:'', nombre:''})

    useEffect(() => {
        console.log('addEventListener')
        return () => console.log('removeEventListener')
    },[input])

    const handleOnChange = (e) =>{
        console.log(e.target.name)
        console.log(e.target.value)
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }
    
    const Loading = () => {
        useEffect(() => {
            return () => console.log('Desmontado')
        })
        return <h2>Loading...</h2>
    }

    return( <>
        <input
        type='text'
        name='texto'
        value={dataForm.texto}
        onChange={handleOnChange}>
        </input>

        <input
        type='text'
        name='nombre'
        value={dataForm.nombre}
        onChange={handleOnChange}>
        </input>
    </>
    )

}

export const LoadingComponent = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 5000)

        return () => {
            console.log('Limpiando componente')
        }
    }, [])

    return( 
        <>
            {loading ? <Loading/> : <h3>Productos Cargados!</h3>}
        </>
    )
}