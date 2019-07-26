const router = require('express').Router({ strict: true, mergeParams: true });

const UserRoutes = require('../components/user/user.routes');
const QuestionRoutes = require('../components/question/question.routes');

const AuthService = require('../../src/services/auth.service');
const TokenGeneratorService = require('../../src/services/token.service');

// Authorization not required
router.use('/api/token', TokenGeneratorService);

// Authorization required
router.use('/api/user', AuthService, UserRoutes);
router.use('/api/question', AuthService, QuestionRoutes);

module.exports = router;
