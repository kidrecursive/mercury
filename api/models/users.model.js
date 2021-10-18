// See https://express-cassandra.readthedocs.io/en/latest/schema/
// for more of what you can do here.
module.exports = function (app) {
  const models = app.get("models");
  const users = models.loadSchema(
    "users",
    {
      table_name: "users",
      fields: {
        id: "int",
        email: "text",
        githubId: "text",
      },
      key: ["id"],
      options: {
        timestamps: true,
      },
    },
    function (err) {
      if (err) throw err;
    }
  );

  users.syncDB(function (err) {
    if (err) throw err;
  });

  return users;
};
