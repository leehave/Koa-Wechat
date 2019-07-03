const Router = require('koa-router')
const TokenController = require('../controllers/token')

const router = new Router({
    prefix: '/api/v1'
})

/**
 * token
 */
// 获取token
router.get('/wechat', TokenController.create);

module.exports = router
