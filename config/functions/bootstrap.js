'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#bootstrap
 */
console.log("PROCESS VARIABLES:-")
console.log(process.env.DATABASE_NAME)
console.log(process.env.DATABASE_PORT)
console.log(process.env.DATABASE_USERNAME)
console.log(process.env.DATABASE_PASSWORD)
console.log(process.env.DATABASE_HOST)
console.log(process.env.ADMIT_JWT_SECRET)
console.log(process.env.JWT_SECRET)
module.exports = () => {};
