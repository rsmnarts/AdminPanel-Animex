'use strict'

const videos = use('App/Models/Video')

class MovieController {
	
	async index ({response}) {
		let movies = await videos.query().limit(10).fetch();
		return response.json(movies)
	}

	async show ({params, response}) {
		let movie = await videos.find(params.id);
		return response.json(movie)
	}
}

module.exports = MovieController
