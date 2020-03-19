const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log(req.user.id)
    const queryText = `SELECT * FROM "data" WHERE id = $1`;
    pool.query(queryText, [1])
        .then((result) => res.send(result.rows))
        .catch((error) => console.log(error))
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;