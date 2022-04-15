const { OAuth2Client } = require("google-auth-library");
const { User } = require("../models/index");
const { tokenPayload } = require("../helpers/jwt");

const authGoogle = async (req, res, next) => {
  try {
    const { idToken } = req.body;
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    const user = await User.findOne({
      where: {
        email: payload.email,
      },
    });

    let username = payload.email.split("@")[0];
    if (user) {
      let token = tokenPayload({
        id: user.id,
        email: payload.email,
        username: username,
      });
      res.status(200).json({ token });
    } else {
      const user = User.create({
        username,
        email: payload.email,
        password: "secret",
        role: "Staff",
      });
      let token = tokenPayload({ username: user.username, email: user.email });
      res.status(200).json({ token });
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  authGoogle,
};
