const express = require(`express`)
const router = express.Router()


router.get('/servers/:id', (req, res) => res.render('../dashboard/show.pug'))

module.exports = router;