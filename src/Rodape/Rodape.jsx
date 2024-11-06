import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import RoomIcon from '@mui/icons-material/Room';
import HistoryIcon from '@mui/icons-material/History';

export default function Rodape() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
        <Tab icon={<HomeIcon/>}/>
        <Tab icon={<RoomIcon/>}/>
        <Tab icon={<HistoryIcon/>}/>
    </Tabs>
  );
}
