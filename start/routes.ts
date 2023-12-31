/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', () => {
  return { message: 'Hello Gotedo' }
})

Route.get('/user', 'UsersController.index')
Route.get('/user/:id', 'UsersController.getById')
Route.post('/user', 'UsersController.create')

Route.get('/request', 'SupportRequestsController.index')
Route.post('/request', 'SupportRequestsController.create')
