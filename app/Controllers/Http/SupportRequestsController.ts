import Application from '@ioc:Adonis/Core/Application'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import SupportRequest from 'App/Models/SupportRequest'

export default class SupportRequestsController {
  //get all requests
  public async index({}: HttpContextContract) {
    return SupportRequest.all()
  }

  //creating a new support request
  public async create({ request, response }: HttpContextContract) {
    const reqs = await request.validate({
      schema: schema.create({
        firstName: schema.string({ trim: true}),
        lastName: schema.string({ trim: true }),
        email: schema.string({ trim: true }),
        messageTitle: schema.string({ trim: true }),
        messageText: schema.string({ trim: true }),
        fileUpload: schema.file({
          size: '3mb',
          extnames: ['jpg', 'png', 'jpeg', 'pdf', 'docx', 'doc'],
        }),
      }),
    })

    const fileUpload = request.file('file')

    const fileName = new Date().getTime().toString() + `.${fileUpload?.extname}`

    await fileUpload?.move(Application.publicPath('file_uploads'), { name: fileName })

    const newSupportRequest = new SupportRequest()

    newSupportRequest.firstname = reqs.firstName
    newSupportRequest.lastname = reqs.lastName
    newSupportRequest.email = reqs.email
    newSupportRequest.messageTitle = reqs.messageTitle
    newSupportRequest.fullMessage = reqs.messageText
    newSupportRequest.userFile = `file_uploads/${fileName}`

    await newSupportRequest.save()
    response.status(201)

    return newSupportRequest
  }
}