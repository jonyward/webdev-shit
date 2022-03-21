const path = require('path');

exports.entries_list = function(req, res) {
    res.send('<h1>Guestbook Messages</h1><p>Not yet implemented: will show a list of guest book entries.</p>');
} 
exports.landing_page = function(req, res) {
    res.send('<h1>Welcome to the guestbook application.</h1>');
}

exports.about_page = function(req, res) {
    res.sendFile(path.join(__dirname, '../public/about.html'));
}

exports.new_entry = function(req,res) {
    res.send('<h1>Not yet implemented: show new entry page</h1>');
}