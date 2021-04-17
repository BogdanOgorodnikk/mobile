const Koa = require('koa')
const bodyParser = require('koa-body')
const config = require('./config')
const kcors = require('kcors')

const userinfo = require('./routes/userinfo')

const app = new Koa()
app.use(bodyParser())
app.use(kcors())

app.use(userinfo.routes())

app.listen(config.PORT, () => {
    console.log(`Server listening on port ${config.PORT}`)
})