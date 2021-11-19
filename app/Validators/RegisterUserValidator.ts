import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RegisterUserValidator {
  constructor (protected ctx: HttpContextContract) {
  }

	
  public schema = schema.create({
	  email: schema.string({},[
		  rules.email(),
		  rules.unique({table: 'users',column: 'email'})
	  ]),
	  password: schema.string({},[
		  rules.minLength(4)
	  ])
  })

	
  public messages = {
	  required: "O {{field}} é obrigatório para se registrar!!!",
	  'email.unique':"Email já cadastrado!!!",
	  'minLength': "Tamanho de senha inválida"
  }
}
