import React from 'react';
import { 
	Paper, withStyles
} from '@material-ui/core';

const styles = theme => ({
	paper: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2,
	}
})

const HomeScreen = (props) => {
	 const { classes } = props;

	return (
		<div>
      <Paper className={classes.paper} elevation={1}>
        <h1 id="animex">Animex</h1>
				<p>
					<a href="https://github.com/Acardemy/Animex"><img src="https://img.shields.io/github/repo-size/badges/shields.svg" alt="GitHub repo size in bytes" /></a>
					<a href="https://github.com/Acardemy/Animex"><img src="https://img.shields.io/github/issues/Acardemy/Animex.svg" alt="" /></a>
					<a href="https://github.com/Acardemy/Animex"><img src="https://img.shields.io/github/forks/Acardemy/Animex.svg" alt="" /></a>
					<a href="https://github.com/Acardemy/Animex"><img src="https://img.shields.io/github/stars/Acardemy/Animex.svg" alt="" /></a>
					<a href="https://twitter.com/rsmnarts"><img src="https://img.shields.io/twitter/url/https/github.com/rsmnarts/todolist.svg?style=social" alt="" /></a>
				</p>
				<p>Project for Arkademy Bootcamp Task, create like Netflix App that scrape video from video streaming website, post to database, serve REST API to client (mobile and web)</p>
				<blockquote>
					<p>“Menikahlah sebelum mapan, Kalo sudah mapan maka harus nikah lagi” ~ Mas Iqbal</p>
				</blockquote>
				<h2 id="folder">Folder</h2>
				<ol>
					<li>Web (React)</li>
					<li>Mobile (React Native)</li>
					<li>Backend (Adonis)</li>
					<li>Scrap (Php - Simple Html Dom)</li>
				</ol>
				<h2 id="howtoinstall">How to install</h2>
				<p>Open folder and follow the instruction there in README.md</p>
				<h2 id="demo">DEMO</h2>
				<ul>
					<li>Server - http://35.187.247.31/ (Recomended) / https://animeapp1.herokuapp.com</li>
					<li>Web - http://35.240.221.191/ (Recomended) / http://animexweb.herokuapp.com / https://animeflix.herokuapp.com</li>
					<li>Mobile (Android) new - <a href="https://github.com/Acardemy/Animex/releases">Github Release</a></li>
				</ul>
				<blockquote>
					<p>“Kalo orang lain bisa, kenapa harus saya?” ~ <a href="https://shafou.com">someone</a></p>
				</blockquote>
				<h2 id="thanksto">Thanks to</h2>
				<ul>
					<li>Muhammad Iqbal</li>
					<li>Isgi Ariza</li>
					<li>Ega Wachid Radiegtya</li>
				</ul>
				<h2 id="sponsorby">Sponsor by</h2>
				<ul>
					<li>Heroku</li>
					<li>Google cloud vps</li>
					<li>Arkademy</li>
					<li>Dumbways</li>
				</ul>
				<blockquote>
					<p>“Berani dulu aja, nangis belakangan” ~ Pratama Agung Sumirat</p>
				</blockquote>
      </Paper>
    </div>
	);
}

export const Home = withStyles(styles)(HomeScreen);