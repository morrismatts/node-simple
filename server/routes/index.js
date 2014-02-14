var app;

module.exports = function(_app) {
	app = _app;

	app.get('/', index);
};

function index(req, res) {
	res.render('pages/home');
}