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

const Route = use('Route')

Route.on('login').render('login')
Route.get('/register/verify/:token', ({ session, response }) => {
  session.flash({
    notification: {
      type: 'success',
      message: 'Your email address has been verified.'
    }
  })
  response.redirect('/login')
})
