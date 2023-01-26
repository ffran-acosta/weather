const port = process.env.PORT || 7004
const start = () => (console.log(`Starting server =>  http://localhost:${port}/weather`))

module.exports = {port, start}