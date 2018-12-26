'use strict'

const Video = use('App/Models/Video')

class MovieController {
	async index ({res}) {
		let movies = await Video.all()
		return res.json(movies)
	}
}

module.exports = MovieController
