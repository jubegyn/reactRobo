import { useState, useEffect } from 'react';
import InformacaoBox from './InformacaoBox';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
//import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import SignalCellularNodataIcon from '@mui/icons-material/SignalCellularNodata';
import SignalCellular0BarIcon from '@mui/icons-material/SignalCellular0Bar';
import SignalCellular1BarIcon from '@mui/icons-material/SignalCellular1Bar';
import SignalCellular2BarIcon from '@mui/icons-material/SignalCellular2Bar';
import SignalCellular3BarIcon from '@mui/icons-material/SignalCellular3Bar';
import SignalCellular4BarIcon from '@mui/icons-material/SignalCellular4Bar';

import BatteryCharging20Icon from '@mui/icons-material/BatteryCharging20';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, get, query, limitToLast } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import Mapa from './../Mapa/Mapa';
import Alertas from './../Alertas/Alertas';

const fireBaseConfig = {
    apiKey: "AIzaSyALbkYw3MaT16Dnc6KN9unfffh41iifk-c",
    authDomain: "robomot-bdd06.firebaseapp.com",
    databaseURL: "https://robomot-bdd06-default-rtdb.firebaseio.com",
    projectId: "robomot-bdd06",
    storageBucket: "robomot-bdd06.appspot.com",
    messagingSenderId: "24224472186",
    appId: "1:24224472186:web:2ba0d58ab02428079defc3",
    measurementId: "G-H68TS8CRB7"
};

const app = initializeApp(fireBaseConfig);

export function buscarInfoMoto() {
    const database = getDatabase(app);
    const reference = query(ref(database, 'moto'), limitToLast(1));
    return get(reference).then((snapshot) => {
        if (snapshot.exists()) {
            return Object.values(snapshot.val())[0];
        } else {
            console.log("No data available");
            return {};
        }
    }).catch((error) => {
        console.error(error);
        return {};
    });
}

export default function Informacoes() {
    const [infoMoto, setInfoMoto] = useState({});
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(() => {
        buscarInfoMoto().then(data => {
            setInfoMoto(data);
            if (data.localizacao) {
                setLatitude(data.localizacao.Latitude);
                setLongitude(data.localizacao.Longitude);
            }
        });
    }, []);

    // const teste = ;

    // console.log(teste)

    return (
        <>
            <div className="informacoes">
                <div className="informacoesBox"><InformacaoBox icon={<ThermostatIcon />} legend={infoMoto.temperatura + " °C"} /></div>
                <div className="informacoesBox"><InformacaoBox icon={<SatelliteAltIcon />} legend={"GPS"} /></div>
                <div className="informacoesBox"><InformacaoBox icon={obterIconSinalCelular(infoMoto.qualidadeSinalGprs)} legend={infoMoto.qualidadeSinalGprs} /></div>
                <div className="informacoesBox"><InformacaoBox icon={<BatteryCharging20Icon />} legend={infoMoto.nivelBateria} /></div>
            </div>
            <div className="alertas"><Alertas datahora={infoMoto.ultimaAtualizacao} titulo={"X"} /></div>
            <div className="mapa"><Mapa latitude={latitude} longitude={longitude} /></div>
        </>
    );
}

export function obterIconSinalCelular(signalQuality){
   if(signalQuality >= 1 && signalQuality <= 9){
        console.log('Péssimo');
        return <SignalCellular0BarIcon/>;
   } else if(signalQuality >= 10 && signalQuality <= 14){
        console.log('Ruim');
        return <SignalCellular1BarIcon/>;
   } else if(signalQuality >= 15 && signalQuality <= 19){
        console.log('Aceitável');
        return <SignalCellular2BarIcon/>;
   } else if(signalQuality >= 20 && signalQuality <= 30){
        console.log('Bom');
        return <SignalCellular3BarIcon/>;
   } else if(signalQuality >= 31){
        console.log('Ótimo');
        return <SignalCellular4BarIcon/>;
   } else {
        console.log('nenhum');
        return <SignalCellularNodataIcon/>;
   }
}