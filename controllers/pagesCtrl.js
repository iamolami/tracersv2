const pagesCtrl = {
    homePage: (req, res) => {
        res.render('pages/index', { title: 'Home' })
    },
    aboutPage: (req, res) => {
        res.render('pages/aboutUs', { title: 'About Us' })
    },
    registerPage: (req, res) => {
        res.render('pages/register', { title: 'Become a Member' })
    },
    team: (req, res) => {
        res.render('pages/team', { title: 'Founders' })
    },
    location: (req, res) => {
        res.render('pages/location', { title: 'location' })
    }
}

module.exports = pagesCtrl;