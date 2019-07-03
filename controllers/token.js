const util = require('../libs/util');
const tokenModel = require('../modules/token');
const path = require('path');
const fs = require('fs');
const statusCode = require('../libs/status-code');
var wechat_file = path.join(__dirname, '../config/wechat.txt');
class TokenController {
	static async create(ctx){
		var accessObj = {};
		var data = fs.readFileSync(wechat_file,'utf-8')
		var accessData = JSON.parse(data);
		var newData = JSON.parse(accessData);
		accessObj.name = 'access_token';
		accessObj.access_token = newData['access_token'];
		accessObj.expires_in = newData['expires_in'];
		await tokenModel.create(accessObj);
		ctx.response.status = 200;
		ctx.body = statusCode.SUCCESS_200('创建token成功！');
		
	}
	static async update(ctx){
		let req = ctx.request.body;

	}
}
module.exports = TokenController;