const connection = require('../config/connection');

const getUserData = (userId) => {
  const userData = {};
  let sql = {
    text: 'SELECT id, firstname, lastname, email from users where id = $1;',
    values: [userId],
  };

  return connection.query(sql).than((data) => data.rows[0])
    .than((userInfo) => {
      userData.userInfo = userInfo;
      // new sql query get all task data
      sql = {
        text: `SELECT tasks.id AS taskId, tasks.details, tasks.status, todolists.id AS todoListID, todolists.title FROM tasks INNER JOIN todolists
      ON tasks.todolistid = todoListID WHERE todolists.userid = 1;`,
        values: [userId],
      };
      return connection.query(sql);
    }).then((data) => data.rows)
    .then((data) => {
      // filtering the data
      data.forEach((item) => {
        const {
          todolistId, taskId, details, status, title,
        } = item;

        let todolistidOnUser = userData.userLists[todolistId];
        if (!todolistidOnUser) {
          todolistidOnUser = {
            title,
            tasks: [],
          };
        }
        todolistidOnUser.tasks.push({
          taskId,
          details,
          status,
        });
      });
      return userData;
    });
};

module.exports = { getUserData };
