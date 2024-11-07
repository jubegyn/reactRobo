import VeiculoDescription from "./VeiculoDescription";
import image from "../assets/img/moto.png"

export default function Veiculo() {
    return(
        <>
            <VeiculoDescription content={<p>Shadow 600</p>}></VeiculoDescription>
            {<VeiculoDescription content={<img src={image}/>}></VeiculoDescription>}
        </>
    )
}