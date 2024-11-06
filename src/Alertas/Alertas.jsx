import Alerta from './Alerta'

export default function Alertas({datahora, titulo}) {
    return(
        <>
            <Alerta datahora={datahora} titulo={titulo} />
            <Alerta datahora={datahora} titulo={titulo} />
            <Alerta datahora={datahora} titulo={titulo} />
            <Alerta datahora={datahora} titulo={titulo} />
        </>
    )
}