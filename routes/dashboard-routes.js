const express = require(`express`)
const router = express.Router()

router.get('/', (req, res) => res.render('../dashboard/index.pug'));


module.exports = router;