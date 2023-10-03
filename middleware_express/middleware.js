const path = require("path");
const fs = require("fs");

const pathToDb = path.join(__dirname, "db", "user.json");

const confirmApiKey = (req, res, next) => {
  const users = JSON.parse(fs.readFileSync(pathToDb));
  
  const apiKey = req.headers["api-key"];
  if (!apiKey)
  {
    return res.status(401).json({
      message: "Lack valid authentication credentials. Api-Key is required."
    });
  }

  const checkUser = users.find(checkUser => checkUser.apiKey === apiKey);
  if (!checkUser)
  {
    return res.status(403).json({
      message: "You don't have permission to access, Invalid Api Key." 
    });
  }
  req.checkUser = checkUser;
  next();
}

module.exports = {confirmApiKey};