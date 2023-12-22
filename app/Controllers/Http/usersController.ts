import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'

export default class UsersController {
  //get all user
  public async index({}: HttpContextContract) {
    return User.all()
  }

  // get user by ID
  public async show({ params }: HttpContextContract) {
    return User.findOrFail(params.id)
  }

  //create a new user
  public async store({ request, response }: HttpContextContract) {
    const req = await request.validate({
      schema: schema.create({
        full_name: schema.string({ trim: true }),
        email: schema.string({ trim: true }),
      }),
    })

    const newUser = await User.create(req)
    response.status(201)

    return newUser
  }
}