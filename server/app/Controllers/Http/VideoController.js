'use strict'

const Videos = use('App/Models/Video')

class MovieController {
	
	async index ({response}) {
		let videos = await Videos.query().limit(10).orderBy('id', 'desc').fetch()
		return response.json(videos)
	}

	async show ({params, response}) {
		const video = await Videos.find(params.id)
		return response.json(video)
	}

	async delete ({params, response}) {
		const video = await Videos.find(params.id)
		if (!video) {
		  return response.status(404).json({
		    data: 'Resource not found'
		  })
		}
		const info = await video.delete()
		return response.status(200).json({info, video})
	}

	async store ({request, response}) {
		const id_anime = request.input('id_anime')
		const episode = request.input('episode')
		const video_embeded = request.input('video_embeded')

		const videos = new Videos()
		videos.id_anime = id_anime
		videos.episode = episode
		videos.video_embeded = video_embeded

		const video = await videos.save()
		return response.status(201).json({video, videos})
	}

	async update ({params, request, response}) {

		const videos = await Videos.find(params.id)
		if (!videos) {
		  return response.status(404).json({
		    data: 'Resource not found'
		  })
		}
		const id_anime = request.input('id_anime')
		const episode = request.input('episode')
		const video_embeded = request.input('video_embeded')

		videos.id_anime = id_anime
		videos.episode = episode
		videos.video_embeded = video_embeded

		const video = await videos.save()
		return response.status(200).json({video, videos})
	}
}

module.exports = MovieController
