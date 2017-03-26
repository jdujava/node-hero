// index.js
// lol skuska

// Asynchronous programming in Node.js
//
// const fs = require('fs')
// require('./app/index')
//
// fs.readFile('README.md', 'utf-8', function (err, content) {
//   if (err) {
//     return console.log(err)
//   }
//   console.log(content)
// })


// Async.js
//
// async.parallel(['file1', 'file2', 'file3'], fs.stat,
// function (err, results) {
//  // results is now an array of stats for each file
//  })


// Promises
//
// function stats(file) {
//   return new Promise((resolve, reject) => {
//     fs.stat(file, (err, data) => {
//       if (err) {
//         return reject(err)
//       }
//       resolve(data)
//     })
//   })
// }
//
// Promise.all([
//   stats('package.json'),
//   stats('README.md'),
//   stats('index.js')
// ])
// .then((data) => console.log(data))
// .catch((err) => console.log(err))


// Http module for Node.js server
//
// const http = require('http')
// const port = 3000
//
// const requestHandler = (request, response) => {
//   console.log(request.url)
//   response.end('Hello Node.js Server!')
// }
//
// const server = http.createServer(requestHandler)
//
// server.listen(port, (err) => {
//   if (err) {
//     return console.log('something bad happened', err)
//   }
//
//   console.log(`server is listening on ${port}`)
// })


// Express
//
// const express = require('express')
// const app = express()
// const port = 3000
//
// app.get('/', (request, response) => {
//   response.send('Hello from Express!')
// })
//
// app.listen(port, (err) => {
//   if (err) {
//     return console.log('something bad happened', err)
//   }
//
//    console.log(`server is listening on ${port}`)
// })


// Middlewares
//
// const express = require('express')
// const app = express()
//
// app.use((request, response, next) => {
//   console.log(request.headers)
//   next()
// })
//
// app.use((request, response, next) => {
//   request.chance = Math.random()
//   next()
// })
//
// app.get('/', (request, response) => {
//   response.json({
//     chance : request.chance
//   })
// })
//
// app.listen(3000)


// Error handling
//
// const express = require('express')
// const app = express()
//
// app.get('/', (request, response) => {
//   throw new Error('oops')
// })
//
// app.use((err, request, response, next) => {
//   // log the error, for now just console.log
//   console.log(err)
//   response.status(500).send('Something broke!')
// })
//
// app.listen(3000)


// Rendering HTML
//
const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (request, response) => {
  response.render('home', {
    name: 'Jonas'
  })
})

app.listen(3000);
