console.log("PROCESS", process.env.INSTANCE_CONNECTION_NAME)
module.exports = ({ env }) => ({
  "host": `${process.env.HOST}`,
  "port": `${process.env.PORT || 1337}`,
  "production": true,
  "proxy": {
    "enabled": false
  },
  "cron": {
    "enabled": false
  },
  "admin": {
    "autoOpen": false
  }
});
