'use strict';

const { Router } = require('express');
const router = new Router();

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Hello World!' });
});

router.get('/input', (req,res,next) => {
  res.render('input');
})

module.exports = router;