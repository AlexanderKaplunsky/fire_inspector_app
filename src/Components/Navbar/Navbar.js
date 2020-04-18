import React from 'react';
import { Link } from 'react-router-dom';
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
            <ListItemText primary={`Головна`} />
          </ListItem>
        </Link>
        <Link to="/object-review">
          <ListItem button key={`object-review`}>
            <ListItemText
              primary={`Об'єкти перевірки`}
              className={'navbar-control-text'}
            />
          </ListItem>
        </Link>
        <Link to="/personal">
          <ListItem button key={`personal`}>
            <ListItemText
              primary={`Працівники`}
              className={'navbar-control-text'}
            />
          </ListItem>
        </Link>
        <Link to="/fire_shield">
          <ListItem button key={`fire_shield`}>
            <ListItemText
              primary={`Пожежні щити`}
              className={'navbar-control-text'}
            />
          </ListItem>
        </Link>
        <Link to="/extinguishers">
          <ListItem button key={`extinguishers`}>
            <ListItemText
              primary={`Вогнегасники`}
              className={'navbar-control-text'}
            />
          </ListItem>
        </Link>
        <Link to="/documents">
          <ListItem button key={`documents`}>
            <ListItemText
              primary={`Документи`}
              className={'navbar-control-text'}
            />
          </ListItem>
        </Link>
        <Link to="/automatic_extinguishing">
          <ListItem button key={`automatic_extinguishing`}>
            <ListItemText
              primary={`Автоматичні системи пожежогасіння`}
              className={'navbar-control-text'}
            />
          </ListItem>
        </Link>
        <Link to="/incidents">
          <ListItem button key={`incidents`}>
            <ListItemText
              primary={`Інциденти`}
              className={'navbar-control-text'}
            />
          </ListItem>
        </Link>
      </List>
    </div>
  );
};

export default Navbar;
