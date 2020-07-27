import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Link} from 'react-router-dom';

import '../App.css';

const Header = (props:any)=>  {
  const [open, setOpen] = React.useState(false);
  const [dialog, setDialog] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setDialog(true);
  };
  const handleClose = (durum:number) => {
    if (durum===1)
    {
      localStorage.clear();
      props.history.push('/');
    }
    setDialog(false);
  };
  const homepagebtn = () => {
    props.history.push('/homepage');
  }
  return (
    <Grid item xs={12} className="header" container direction="row">
      <Grid item xs={3} container alignItems="center">
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
          <img src={require("./images/menu.png")} className="menu" alt="Logo" />
        </IconButton>
        <Drawer
          anchor="left"
          open={open}
          onClose={handleDrawerClose}
        >
          <div className="sideMenu">
          <Button onClick={homepagebtn}>
            Anasayfa
          </Button>
          <Button onClick={handleClickOpen}>
            Çıkış Yap
          </Button>
          </div>
        </Drawer>
        <Dialog
          open={dialog}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Market Burada</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Çıkış yapmak istediğinize emin misiniz ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>{handleClose(0)}} color="primary">
              Hayır
            </Button>
            <Button onClick={()=>{handleClose(1)}} color="primary" autoFocus>
              Evet
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
      <Grid item xs={6} justify="center" alignItems="center" container className="textCenter">
        <img src={require("./images/logo.png")} className="logo" alt="Logo" />
      </Grid>
      <Grid item xs={3} justify="flex-end" alignItems="center" container className="textCenter">
        <Link to="/basket">
          <img src={require("./images/sepet.png")} className="menu" alt="Logo" />
        </Link>
      </Grid>
    </Grid>
  );
}

export default Header;
