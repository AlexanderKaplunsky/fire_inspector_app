import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import StoreIcon from '@material-ui/icons/Store';
import PersonIcon from '@material-ui/icons/Person';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import FireplaceIcon from '@material-ui/icons/Fireplace';
import DescriptionIcon from '@material-ui/icons/Description';
import FlashAutoIcon from '@material-ui/icons/FlashAuto';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-component">
      <div className="navbar-header-text-wrapper">
        <p>Пожежний</p>
        <p>інспектор</p>
      </div>
      <List>
        <Link to="/home">
          <ListItem button key={`home`} divider>
            <HomeIcon htmlColor={'white'}/>
            <ListItemText primary={`Головна`}
            className={'navbar-control-text'} />
          </ListItem>
        </Link>
        <Link to="/object-review">
          <ListItem button key={`object-review`}>
            <StoreIcon htmlColor={'white'}/>
            <ListItemText
              primary={`Об'єкти перевірки`}
              className={'navbar-control-text'}
            />
          </ListItem>
        </Link>
        <Link to="/personal">
          <ListItem button key={`personal`}>
            <PersonIcon htmlColor={'white'}/>
            <ListItemText
              primary={`Працівники`}
              className={'navbar-control-text'}
            />
          </ListItem>
        </Link>
        <Link to="/fire_shield">
          <ListItem button key={`fire_shield`}>
            <AspectRatioIcon htmlColor={'white'}/>
            <ListItemText
              primary={`Пожежні щити`}
              className={'navbar-control-text'}
            />
          </ListItem>
        </Link>
        <Link to="/extinguishers">
          <ListItem button key={`extinguishers`}>
            <FireplaceIcon htmlColor={'white'}/>
            <ListItemText
              primary={`Вогнегасники`}
              className={'navbar-control-text'}
            />
          </ListItem>
        </Link>
        <Link to="/documents">
          <ListItem button key={`documents`}>
            <DescriptionIcon htmlColor={'white'}/>
            <ListItemText
              primary={`Документи`}
              className={'navbar-control-text'}
            />
          </ListItem>
        </Link>
        <Link to="/automatic_extinguishing">
          <ListItem button key={`automatic_extinguishing`}>
            <FlashAutoIcon htmlColor={'white'}/>
            <ListItemText
              primary={`Автоматичні системи пожежогасіння`}
              className={'navbar-control-text'}
            />
          </ListItem>
        </Link>
        <Link to="/incidents">
          <ListItem button key={`incidents`} divider>
            <EmojiTransportationIcon htmlColor={'white'} />
            <ListItemText
              primary={`Інциденти`}
              className={'navbar-control-text'}
            />
          </ListItem>
        </Link>
        <Link to="/custom_search">
          <ListItem button key={`custom_search`}>
            <FindInPageIcon htmlColor={'white'}/>
            <ListItemText primary={`Вибірковий пошук`}
            className={'navbar-control-text'} />
          </ListItem>
        </Link>
      </List>
    </div>
  );
};

export default Navbar;
