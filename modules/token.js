const db = require('../config/db')
const Sequelize = db.sequelize
const Token = Sequelize.import('../schema/token.js')
Token.sync({force: false});

class TokenModel {
    /**
     * 创建token
     * @param token
     * @returns {Promise<boolean>}
     */
    static async create(token) {
			console.log('model中的token',token)
			let { name, access_token, expires_in} = token;
			return await Token.create({
				name,
				access_token,
				expires_in
      })
    }

    /**
     * 删除此token
     * @param token 
     * @returns {Promise.<boolean>}
     */
    static async delete(name) {
			await Token.destroy({
            where: {
                name
            }
        })
        return true
    }
}

module.exports = TokenModel
