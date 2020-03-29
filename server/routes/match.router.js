const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    const queryText =  `INSERT INTO "matches" ("donor_id", "recipient_id")
                        VALUES ($1, $2);`
    for (let i=0; i<req.body.donors.length; i++) {
        let values = [req.body.donors[i], req.body.recipients[i]];
        pool.query(queryText, values)
        .then((result) => res.sendStatus(200))
        .catch((error) => console.log(error))
    }
});

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "matches" WHERE id = $1`;
    pool.query(queryText, [req.user.id])
        .then((result) => res.send(result.rows))
        .catch((error) => console.log("Error in Router ", error))
})

module.exports = router;