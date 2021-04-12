const express = require(`express`)
const Bacon = require(`../base/Client`)
const bacon = new Bacon() 
const commands = bacon.commands
const app = express()
const middleware = require(`./middleware`)
const authRoutes = require(`./routes/auth-routes`)
const dashboardRoutes = require(`./routes/dashboard-routes`)
const rootRoutes = require(`./routes/root-routes`)
const cookies = require("cookies")


app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.use(cookies.express('a', 'b', 'c'))

app.use(express.static(`${__dirname}/assets`))

app.use('/', 
middleware.updateUser, rootRoutes, 
authRoutes, 
middleware.validateUser, middleware.updateGuilds, dashboardRoutes)

app.get('*', (req, res) => res.render('errors/404'))


const port = 42069;
app.listen(port, () => console.log(`Server Is Live On Port ${port}`))