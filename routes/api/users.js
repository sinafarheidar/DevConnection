const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator")

// @route POST api/users
// @desc Register User
// @access Public
router.post('/', [
    // Checks That Input Passes Restrictions
    check("name", 'Name Is Required').not().isEmpty(),

    check("email", 'Please Include Valid Email').isEmail(),

    check("password", 'Please Enter A Password With 6 Or More Characters ').isLength({ min: 6 })
], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    res.send('User Route')
});

module.exports = router;