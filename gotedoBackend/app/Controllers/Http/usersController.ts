import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
    public async index(){
        return {
          message:  'GET Users'
        }
    }
    public async vee(ctx:HttpContextContract){
        return {
            Message: "POST user",
            body: ctx.request.body()
        }
    }
}
