//function dateTimeNow (req, res) {
//  res.send(new Date())
//}

module.exports = (req, res) => {
  res.send((new Date()).toLocaleDateString())
}

//module.exports = { dateTimeNow }

