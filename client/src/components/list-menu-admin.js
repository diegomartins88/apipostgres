import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBox from '@material-ui/icons/AccountBox';
import AccountBalance from '@material-ui/icons/AccountBalance';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AttachMoney from '@material-ui/icons/AttachMoney'
import ExitToApp from '@material-ui/icons/ExitToApp'

export const mainListItems = (
  <div>
    <ListItem button component="a"href="/admin">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard"/>
    </ListItem>
    <ListItem button component="a" href="/admin/usuarios">
      <ListItemIcon>
        <AccountBox />
      </ListItemIcon>
      <ListItemText primary="Usuários" />
    </ListItem>
    <ListItem button component="a" href="/admin/estabelecimentos">
      <ListItemIcon>
        <AccountBalance />
      </ListItemIcon>
      <ListItemText primary="Estabelecimentos" />
    </ListItem>
    <ListItem button component="a" href="/admin/financeiro">
      <ListItemIcon>
      </ListItemIcon>
      <AttachMoney />
      <ListItemText primary="Financeiro" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset><b>RELATÓRIOS</b></ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Repasse Por Data" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Mensalidades" />
    </ListItem>
    <br></br>
    <i> © 2021 Diego Martins, Inc. </i>
  </div>
);
