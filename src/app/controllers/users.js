import { User } from '@models'

export default class usersController {
	async create (req, res) {
		const { user } = req.body

		const createUser = await User.create (user)

		if ( createUser ) {
			res.redirect ('/')
		}
	}
}
