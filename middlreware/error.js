const util = require('util')
const statusCode = require('../libs/status-code')

/**
 * 判断token是否可用
 */
module.exports = function () {
	return async function (ctx, next) {
		try {
			
			await next()
		} catch (err) {

			if (err.status === 401) {
				ctx.status = 401;
				ctx.body = statusCode.ERROR_401('unauthorized，请求需要用户的身份认证！');
			} else {

				err.status = 404;
				ctx.body = statusCode.ERROR_404('不存在的用户');
			}
		}
	}
}
