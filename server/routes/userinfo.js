const Router = require('koa-router')
const router = new Router()
const { sequelize } = require('../database/db')

router.get('/api/userinfos', async ctx => {
    try {
        const userinfos = await sequelize.query(
            `SELECT * FROM userinfos`
        )
        return ctx.body = userinfos[0]
    } catch (e) {
        return ctx.body = e
    }
})

router.post('/api/userinfo', async ctx => {
    const {type, mader, price} = ctx.request.body
    try {
        const userinfo = await sequelize.query(`
        INSERT INTO userinfos(type, mader, price)
        VALUES('${type}', '${mader}', '${price}')
        `)
        return ctx.body = userinfo
    } catch (e) {
        return ctx.body = e
    }
})

module.exports = router