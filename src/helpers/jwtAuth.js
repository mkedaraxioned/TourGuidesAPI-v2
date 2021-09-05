const jwt = require('jsonwebtoken');
class JwtAuth {
    // generate access token valid for 5min == 300s
     generateAccessToken(user) {
      return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '300s' });
    }
}

const jwtAuthObj = new JwtAuth();
module.exports = jwtAuthObj; 