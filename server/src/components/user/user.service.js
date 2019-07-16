const UserModel = require('./models/user.model');

const ROW_UPDATED = 1;

const getUser = async authZeroId => {
  return UserModel.findOne({
    where: { authZeroId }
  });
};

const updateUser =  async ({ authZeroId, update }) => {
  const updated = await UserModel.update(update, {
    where: { authZeroId }
  });

  return updated[0] === ROW_UPDATED;
};

module.exports = {
  getUser,
  updateUser,
};
