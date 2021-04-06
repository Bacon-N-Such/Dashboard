const express = require(`express`)
const Bacon = require(`../base/Client`)
const bacon = new Bacon() 
const commands = bacon.commands
const app = express()
const middleware = require(`./middleware`)
const rootRoutes = require(`./routes/root-routes`)
const authRoutes = require(`./routes/auth-routes`)
const dashboardRoutes = require(`./routes/dashboard-routes`)
const cookies = require("cookies")

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.use(cookies.express('a', 'b', 'c'))

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });
});



app.use('/', 
middleware.updateUser, rootRoutes, 
authRoutes
)
app.use('/dashboard', middleware.validateUser, dashboardRoutes)

app.get('*', (req, res) => res.render('errors/404'))

app.get('/', (req, res) => res.render('home'));
app.get('/invite', (req, res) => res.render('invite'));
app.get('/discord', (req, res) => res.render('discord'));
app.get('/commands/administrator', (req, res) => res.render('commands-administrator', {
    subtitle: 'Admin'
    }));
app.get('/commands/animal', (req, res) => res.render('commands-animal', {
    subtitle: 'Animal'
    }));
app.get('/commands/automod', (req, res) => res.render('commands-automod', {
    subtitle: 'AutoMod'
    }));
app.get('/commands/config', (req, res) => res.render('commands-config', {
    subtitle: 'Config'
    }));
app.get('/commands/economy', (req, res) => res.render('commands-economy', {
    subtitle: 'Economy'
    }));
app.get('/commands/fun', (req, res) => res.render('commands-fun', {
    subtitle: 'Fun'
    }));
app.get('/commands/giveaway', (req, res) => res.render('commands-giveaway', {
    subtitle: 'Giveaway'
    }));
app.get('/commands/image', (req, res) => res.render('commands-image', {
    subtitle: 'Image'
    }));
app.get('/commands/info', (req, res) => res.render('commands-info', {
    subtitle: 'Info'
    }));
app.get('/commands/misc', (req, res) => res.render('commands-misc', {
    subtitle: 'Misc'
    }));
app.get('/commands/moderation', (req, res) => res.render('commands-moderation', {
    subtitle: 'Moderation'
    }));
app.get('/commands/music', (req, res) => res.render('commands-music', {
    subtitle: 'Music'
    }));
app.get('/commands/reddit', (req, res) => res.render('commands-reddit', {
    subtitle: 'Reddit'
    }));
app.get('/commands/tickets', (req, res) => res.render('commands-tickets', {
    subtitle: 'Tickets'
    }));
app.get('/commands/utility', (req, res) => res.render('commands-utility', {
    subtitle: 'Utility'
    }));
app.get('/commands', (req, res) => res.render('commands', {
    subtitle: 'Commands',
}));

const port = 42069;
app.listen(port, () => console.log(`Server Is Live On Port ${port}`))