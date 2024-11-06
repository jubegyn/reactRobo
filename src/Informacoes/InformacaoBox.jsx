
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

export default function InformacaoBox( {icon, legend} ) {
    return(
        <>
            <div><span className="infoBoxTxt">{legend}</span></div>
            <div className="iconInfo">{icon}</div>
        </>
    )
}