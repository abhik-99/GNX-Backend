// module.exports = ({env})=>({
//   "defaultConnection": "default",
//   "connections": {
//     "default": {
//       "connector": "bookshelf",
//       "settings": {
//         "client": "postgres",
//         "host": `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`,
//         "database": `${process.env.DATABASE_NAME}`,
//         "username": `${process.env.DATABASE_USERNAME}`,
//         "password": `${process.env.DATABASE_PASSWORD}`
//       },
//       "options": {}
//     }
//   }
// })
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST'),
        port: env.int('DATABASE_PORT'),
        database: env('DATABASE_NAME'),
        username: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
      },
      options: {}
    },
  },
});
