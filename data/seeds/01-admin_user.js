const bcrypt = require('bcryptjs')

exports.seed = function(knex) {

  let password = bcrypt.hashSync('password', 8)
  
  return knex("admin").insert([
    {
      id: "abc123",
      username: "user1",
      email: "user1@gmail.com",
      password: password
    }
  ]);
};
