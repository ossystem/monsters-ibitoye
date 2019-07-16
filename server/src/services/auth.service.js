const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

// const validateToken = (req, res, next) => {
//   try {
    const jwtCheck = jwt({
      secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://rotimibest.auth0.com/.well-known/jwks.json'
      }),
      aud: 'https://monsterapi',
      issuer: 'https://rotimibest.auth0.com/',
      algorithms: ['RS256'],
    });
//   } catch (error) {
//     next(error);
//   }
// };

module.exports = jwtCheck;
