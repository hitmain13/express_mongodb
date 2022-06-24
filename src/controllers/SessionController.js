/*
métodos: index, show, update, store, destroy

index: listagem de sessões
store: criação de sessões
show: ao listar somente uma única sessão
update: alterar alguma sessão
destroy: deletar uma sessão
*/

import User from '../models/User';

class SessionController {

    async store(req, res) {
        const { email } = req.body;

        let user = await User.create({ email });

        return res.json(user);
    }

}

export default new SessionController();