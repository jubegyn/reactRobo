export default function Alerta( {titulo, datahora, img} ) {
    return(
        <>
            <div className="alerta">
                <div className="tituloAlerta">{titulo}</div>
                <div className="datahoraAlerta">{datahora}</div>
            </div>
        </>
    )
}