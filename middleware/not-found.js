const notFound = (req, res) => {
    res.status(404).send('Route does not exist', console.log("not found"))}
module.exports = notFound