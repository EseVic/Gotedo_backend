import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
    public async index(){
         const users = await User.all()
         return users
    }
    public async create({ request, response }:HttpContextContract){
        const {email, fullName} = request.body()
        const user = await User.create({
            email,
            fullName
        })
        response.status(201)
        return user
    }
}
