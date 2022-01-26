import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import {useEffect,useState} from 'react';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import TuneRoundedIcon from '@material-ui/icons/TuneRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import './Sidebar.css';
import SidebarChat from './SidebarChat';
import db from "./firebase";
import { useStateValue } from './StateProvider';
function Sidebar( ){
    const [rooms,setRooms] = useState([]);
    const [{user}, dispatch] = useStateValue();

    useEffect(() => {
     const unsubscribe= db.collection("rooms").onSnapshot((snapshot) => 
         setRooms(snapshot.docs.map((doc) =>({
             id:doc.id,
             data: doc.data(),
         }))
     ));
     return() =>{
         unsubscribe();
     }
    },[] );
    return (
    <div className='dev'>
    <div className='icon_bar'>
    <DashboardOutlinedIcon className='dash'/>
    <HomeOutlinedIcon className='home'/>
    <MessageOutlinedIcon className='msg'/>
    <SettingsOutlinedIcon className='set'/>
    <ExitToAppOutlinedIcon className='exit'/>
    </div>
  <div className='chat-bar'>
    <span className='header'>
  <h1>Chat</h1>
  <TuneRoundedIcon className='sort'/>
  <h2>Sort</h2>
  <NotificationsNoneRoundedIcon className='bell'/>
  <Avatar src={user?.photoURL} className='avataar'/>
  <h3>Rohit</h3>
<ExpandMoreRoundedIcon className='expand'/>
</span>
<div className='box'>
  <SearchOutlinedIcon className='search'/> </div>
  <input type='text' placeholder='Search'/>
  <div className='chats'>
  {rooms.map(room => (
                <SidebarChat key = {room.id} id={room.id} name={room.data.name} />
            ))
  }

  </div>
</div>
  </div>);
}

export default Sidebar;
