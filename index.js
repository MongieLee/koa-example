const koa = require('koa')
const router = require('koa-router')()
// const url = require('url')
const app = new koa()


router.get('/index/:hjj', async (ctx) => {
    console.log(`ctx.url`);
    console.log(ctx.url);
    console.log(`ctx.query`);
    console.log(ctx.query);
    console.log(`ctx.querystring`);
    console.log(ctx.querystring);
    ctx.body = 'this is /index'

    console.log(`ctx.params`);
    console.log(ctx.params)
})
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(8888)
console.log('http://localhost:8888')
// function getApp() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (this.server.app === 1) {
//                 let tempArr = []
//                 for (let i = 0; i <= 100; i++) {
//                     tempArr[i] = new deLine()
//                 }
//                 console.log(tempArr);
//                 resolve(tempArr)
//             } else {
//                 reject(new Error(new deLine(
//                     this.server ? 'This.deline name = name' : 'Key border'
//                 )))
//             }
//         })
//     })
// }

// const server = new app()

// class deLine {
//     constructor(name) {
//         this.name = name
//         console.log()
//     }
// }

// var http = require('http');
// http.createServer(function (request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/plain' });
//     response.end('Hello World');
// }).listen(8081);

// console.log('Server running at http://127.0.0.1:8081/');

