const express = require(`express`)
const config= require(`../../assets/config.json`)
const router = express.Router()
const authClient = require(`../auth-client`)

router.get('/login', (req, res,) => res.redirect(`https://discord.com/api/oauth2/authorize?client_id=${config.ID}&redirect_uri=${config.DASHBOARD_URL}/auth&response_type=code&scope=guilds%20identify`))
router.get('/auth', async (req, res) => {
    const code = req.query.code;
    try {
        const code = req.query.code;
        const key = await authClient.getAccess(code)  
        res.cookies.set('key', key)
        res.redirect('/dashboard')
    } catch {
        res.redirect('/')
    }
})

router.get('/logout', async (req, res) => {
    res.cookies.set('key', '')

    res.redirect('/')
})
module.exports = router