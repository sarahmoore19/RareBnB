const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const { restoreUser } = require('../../utils/auth.js');
const {requireAuth} = require('../../utils/auth.js');

router.get('/test', requireAuth, (req, res) => {
  res.json({message: 'success'})
})

router.use(restoreUser);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
});

module.exports = router;

// router.get(
//   '/restore-user',
//   (req, res) => {
//     return res.json(req.user);
//   }
// );
//
// const { requireAuth } = require('../../utils/auth.js');
//
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );
//
//
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');
//
//
// router.get('/set-token-cookie', async (_req, res) => {
//   const user = await User.findOne({
//       where: {
//         username: 'Demo-lition'
//       }
//     });
//   setTokenCookie(res, user);
//   return res.json({ user: user });
// });
//
