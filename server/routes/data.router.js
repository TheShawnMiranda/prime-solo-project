const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log(req.user.id)
    const queryText = `SELECT * FROM "data" WHERE id = $1`;
    pool.query(queryText, [req.user.id])
        .then((result) => res.send(result.rows))
        .catch((error) => console.log(error))
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    console.log(req.body);
    const queryText =  `INSERT INTO "data" ("donor_name", "donor_blood_type", "donor_height", "donor_weight", "donor_age", "donor_organ", "zip",
                        "recipient_name", "recipient_blood_type", "recipient_height", "recipient_weight", "recipient_age", "recipient_organ", "matched")
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14);`
    const values = [req.body.donor_name, req.body.donor_blood_type, req.body.donor_height, req.body.donor_weight, req.body.donor_age, req.body.donor_organ, req.body.zip, req.body.recipient_name,
                    req.body.recipient_blood_type, req.body.recipient_height, req.body.recipient_weight, req.body.recipient_age, req.body.recipient_organ, false]
    pool.query(queryText, values)
        .then((result) => res.sendStatus(200))
        .catch((error) => console.log(error))
});

module.exports = router;

   
    // donor_name: 'Andreas',
    // donor_blood_type: 'B-',
    // donor_height: '150',
    // donor_weight: '150',
    // donor_age: '21',
    // donor_organ: 'Kidney',
    // zip: '55102',
    // recipient_name: 'Vithue',
    // recipient_blood_type: 'B+',
    // recipient_height: '150',
    // recipient_weight: '150',
    // recipient_age: '21',
    // recipient_organ: 'Liver'