import VeiculoDescription from "./VeiculoDescription";

export default function Veiculo() {
    return(
        <>
            <VeiculoDescription content={<p>Shadow 600</p>}></VeiculoDescription>
            {<VeiculoDescription content={<img src="src/assets/img/moto.png"/>}></VeiculoDescription>}
        </>
    )
}