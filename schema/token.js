const moment = require('moment');
module.exports = function (sequelize, DataTypes) {
	return sequelize.define('token', {
		name: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		access_token: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		expires_in:{
			type:DataTypes.BIGINT(50)
		}
	}, {
			// 如果为 true 则表的名称和 model 相同，即 user
			// 为 false MySQL创建的表名称会是复数 users
			// 如果指定的表名称本就是复数形式则不变
			freezeTableName: true
		})
}
