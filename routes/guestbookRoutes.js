const express = require('express');
const router = express.Router();
const controller = require('../controllers/guestbookControllers');
module.exports = router; 

router.get("/", controller.landing_page);

router.get("/new", controller.new_entry);

router.get('/guestbook', function(req, res) {
    res.send('<h1>Guestbook Messages</h1>');
})
/*
router.get('/about', function(req, res) {
    res.redirect('/about.html');
}) 
*/
router.get("/about", controller.about_page);

router.use(function(req, res) {
    res.status(404);
    res.type('text/plain');
    res.send('404 Not found.');
})

router.use(function(err, req, res, next) {
    res.status(500);
    res.type('text/plain');
    res.send('Internal Server Error.');
})