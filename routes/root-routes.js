const express = require(`express`)
const router = express.Router()

router.get('/', (req, res) => res.render('home'));
router.get('/invite', (req, res) => res.render('invite'));
router.get('/discord', (req, res) => res.render('discord'));
router.get('/commands/administrator', (req, res) => res.render('commands-administrator', {
    subtitle: 'Admin'
    }));
router.get('/commands/animal', (req, res) => res.render('commands-animal', {
    subtitle: 'Animal'
    }));
router.get('/commands/economy', (req, res) => res.render('commands-economy', {
    subtitle: 'Economy'
    }));
router.get('/commands/fun', (req, res) => res.render('commands-fun', {
    subtitle: 'Fun'
    }));
router.get('/commands/giveaway', (req, res) => res.render('commands-giveaway', {
    subtitle: 'Giveaway'
    }));
router.get('/commands/info', (req, res) => res.render('commands-info', {
    subtitle: 'Info'
    }));
router.get('/commands/misc', (req, res) => res.render('commands-misc', {
    subtitle: 'Misc'
    }));
router.get('/commands/moderation', (req, res) => res.render('commands-moderation', {
    subtitle: 'Moderation'
    }));
router.get('/commands/music', (req, res) => res.render('commands-music', {
    subtitle: 'Music'
    }));
router.get('/commands/reddit', (req, res) => res.render('commands-reddit', {
    subtitle: 'Reddit'
    }));
router.get('/commands/tickets', (req, res) => res.render('commands-tickets', {
    subtitle: 'Tickets'
    }));
router.get('/commands/utility', (req, res) => res.render('commands-utility', {
    subtitle: 'Utility'
    }));
router.get('/commands', (req, res) => res.render('commands', {
    subtitle: 'Commands',
}));

module.exports = router