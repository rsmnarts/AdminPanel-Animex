import React, { Component } from 'react';
import {
  AppBar, CssBaseline, Divider, Drawer, Typography,
  Hidden, IconButton, List, ListItem, ListItemIcon,
  ListItemText, Toolbar, Icon, withStyles

} from '@material-ui/core';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  }
});

class ResponsiveDrawer extends Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleIconDrawer = (index) => {
    switch(index) {
      case 0:
        return <Icon>home</Icon>;
      case 1:
        return <Icon>movie</Icon>;
      case 2:
        return <Icon>people</Icon>;
      default:
    }
  }

  render() {
    const { classes, theme, children } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} style={{ background: '#3F51B5' }}>
          <div style={{ padding: 15 }}>
            <Typography variant='headline' noWrap style={{ color: 'white' }}>
              Admin Panel
            </Typography>
          </div>
        </div>
        <Divider />
        <List>
          {['Home', 'Movies', 'Users'].map((text, index) => (
            <ListItem button key={text} component={Link} to={index === 0 ? '/' : text.toLowerCase()}>
              <ListItemIcon>{this.handleIconDrawer(index)}</ListItemIcon>
              <ListItemText primary={text}/>
            </ListItem>
          ))}          
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position='fixed' className={classes.appBar}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <Icon>menu</Icon>
            </IconButton>
            <Typography variant='h6' color='inherit' noWrap>
              Responsive drawer
            </Typography>
          </Toolbar>
        </AppBar>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <nav className={classes.drawer}>
          <Hidden smUp implementation='css'>
            <Drawer
              container={this.props.container}
              variant='temporary'
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation='css'>
            <Drawer
              classes={{  
                paper: classes.drawerPaper,
              }}
              variant='permanent'
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          { children }
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
