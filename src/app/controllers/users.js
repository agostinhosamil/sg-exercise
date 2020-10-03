import { User } from '@models'

export default class usersController {
	async create (req, res) {
		//const { name, email } = req.body


		console.log (req.body)
		res.send('Hello')
	}
}