import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comentario from 'App/Models/Comentario'
import StoreFaqValidator from 'App/Validators/StoreFaqValidator'

export default class ComentariosController {
  public async store ({request,auth}: HttpContextContract) {
    const data = await request.validate(StoreFaqValidator)
    const comentarioDB = await Comentario.create({...data,userId:auth.user?.id})
    return comentarioDB
  }
}
