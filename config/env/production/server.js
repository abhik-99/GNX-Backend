// module.exports = ({env})=>({
//   "host": `${process.env.HOST}`,
//   "port": `${process.env.PORT || 1337}`,
//   "production": true,
//   "proxy": {
//     "enabled": false
//   },
//   "cron": {
//     "enabled": false
//   },
//   "admin": {
//     "autoOpen": false,
//     "auth":{
//       "secret": `${process.env.ADMIN_JWT_SECRET}`
//     }
//   }
// })
module.exports = ({ env }) => ({
  host: env('HOST'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
});
