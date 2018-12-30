import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views'
import { 
  withStyles, TextField, Paper, FormControl, 
  InputLabel, IconButton, Icon, Input, Tab,
  InputAdornment, Button, AppBar, Tabs,
  Typography
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 330
  },
  button: {
    margin: theme.spacing.unit,
    width: 330,
    height: 50
  },
  paper: {
    margin: '10%',
    width: 400
  },
  form: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    justifyContent: 'center'
  }
});

const TabContainer = ({ children, dir }) => (
  <div component="div" dir={dir} >
    {children}
  </div>
)

class Logins extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
      showPassword: 'password',
      value: 0
    }
  }
  
  handleChange = (event, value) => {
    this.setState({
      value
    });
  };

  handleChangePassword = prop => event => {
    this.setState({
      [prop]: event.target.value,
    });
  }

  handleClickShowPassword = () => {
    this.setState(state => ({
      showPassword: !state.showPassword,
    }));
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.container}>
        <Paper className={classes.paper} elevation={1}>
          <AppBar position="static" color="default">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              fullWidth
            >
              <Tab label="Login" />
              <Tab label="Register" />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}
          >
            <TabContainer dir={theme.direction}>
              <form noValidate autoComplete='off' className={classes.form}>
                <FormControl className={classes.margin}>
                  <TextField
                    id='outlined-with-placeholder'
                    variant="outlined"
                    label="Email"
                    className={classes.textField}
                    margin='normal'
                    placeholder='example@example.com'
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon>people</Icon>
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
                <FormControl className={classes.margin}>
                  <TextField
                    id="outlined-adornment-password"
                    variant="outlined"
                    label="Password"
                    className={classes.textField}
                    margin='normal'
                    placeholder='Example Password'
                    type={this.state.showPassword ? 'text' : 'password'}
                    value={this.state.password}
                    onChange={this.handleChangePassword('password')}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="Toggle password visibility"
                            onClick={this.handleClickShowPassword}
                          >
                            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
                <FormControl className={classes.margin}>
                  <Button fullWidth variant="contained" color="primary" className={classes.button}>
                    Login
                  </Button>
                </FormControl>    
              </form>
            </TabContainer>
            <TabContainer dir={theme.direction}>
              <form noValidate autoComplete='off' className={classes.form}>
                <FormControl className={classes.margin}>
                  <TextField
                    id='outlined-with-placeholder'
                    variant="outlined"
                    label="Username"
                    className={classes.textField}
                    margin='normal'
                    placeholder='Example'
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon>people</Icon>
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
                <FormControl className={classes.margin}>
                  <TextField
                    id='outlined-with-placeholder'
                    variant="outlined"
                    label="Email"
                    className={classes.textField}
                    margin='normal'
                    placeholder='example@example.com'
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon>people</Icon>
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
                <FormControl className={classes.margin}>
                  <TextField
                    id="outlined-adornment-password"
                    variant="outlined"
                    label="Password"
                    className={classes.textField}
                    margin='normal'
                    placeholder='Example Password'
                    type={this.state.showPassword ? 'text' : 'password'}
                    value={this.state.password}
                    onChange={this.handleChangePassword('password')}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="Toggle password visibility"
                            onClick={this.handleClickShowPassword}
                          >
                            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
                <FormControl className={classes.margin}>
                  <Button fullWidth variant="contained" color="primary" className={classes.button}>
                    Register
                  </Button>
                </FormControl>    
              </form>
            </TabContainer>
          </SwipeableViews>
        </Paper>
      </div>
    );
  }
}

export const Login = withStyles(styles, { withTheme: true })(Logins);
