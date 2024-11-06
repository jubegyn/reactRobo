import HeaderBox from "./HeaderBox";
import * as React from 'react';
import { AiOutlineReload } from "react-icons/ai";
import SvgIcon from '@mui/material/SvgIcon';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function Header () {
    return (
    <>
        <HeaderBox content={<MenuIcon/>}/>
        <HeaderBox content={<PersonIcon/>}/>
    </>
    )
}