const Koa = require('koa');
const app = new Koa();
const Gamedig = require('gamedig');


app.use(async ctx => {
    const response = await Gamedig.query({
        type: 'protocol-valve',
        host: 'localhost',
        port: 2457,
    })

  ctx.body = response;
});

app.listen(8080);