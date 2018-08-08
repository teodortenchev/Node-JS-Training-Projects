const Article = require('../models').Article;
const User = require('../models').User;

module.exports = {
    createGet: function (req, res) {

        if (!req.isAuthenticated()) {
            errorMsg = 'You must be logged in to create articles.';
            res.render('user/login', {
                error: errorMsg
            });
            return;
        }
        res.render('article/create.hbs')
    },
    createPost: function (req, res) {
        let articleArgs = req.body;
        let errorMsg = '';
        if (!articleArgs.title) {
            errorMsg = 'Article title can\'t be left empty!';
        }else if (!articleArgs.content) {
            errorMsg = 'Content can\'t be left empty!';
        }else if(!req.isAuthenticated()) {
            errorMsg = 'You must be logged in to create articles!'
        }

        if (errorMsg) {
            res.render('article/create', {
                error: errorMsg,
                title: articleArgs.title,
                content: articleArgs.content
            });
            return;
        }

        articleArgs.authorId = req.user.id;

        Article.create(articleArgs).then(article => {
            res.redirect('/');
        });
    },
    details: function (req, res) {
        let articleId = req.params.id;
        Article
            .findById(articleId, {include: [{model:User}]})
            .then(article => {
                res.render('article/details', article.dataValues)
            })
    }
};