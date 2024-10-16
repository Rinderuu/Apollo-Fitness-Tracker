// routes/route.js
import express from 'express';
const router = express.Router();

// Route to render the index.ejs file
router.get('/', (req, res) => {
  res.render('index');  // This renders 'views/index.ejs'
});

router.get('/login', (req, res) => {
  res.render('login');  // This renders 'views/index.ejs'
});

export default router;
