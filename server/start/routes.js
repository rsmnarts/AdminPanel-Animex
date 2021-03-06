'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  Route.get('videos', 'VideoController.index')
  Route.get('videos/:id', 'VideoController.show')
  Route.post('videos', 'VideoController.store')
  Route.put('videos/:id', 'VideoController.update')
  Route.delete('videos/:id', 'VideoController.delete')
}).prefix('api/v1').middleware('auth')

Route.group(() => {
  Route.post('register', 'AuthController.register')
  Route.post('login', 'AuthController.login')
}).prefix('auth')