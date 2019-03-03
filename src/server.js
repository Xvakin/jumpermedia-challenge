require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const Octokit = require('@octokit/rest')
const parse = require('parse-link-header')
const app = express()
const port = 5000
const octokit = new Octokit({
  auth: `token ${process.env.GITHUB_API_TOKEN}`,
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/*', (req, res) => {
  const path = req.url.replace('/api', ``)
  octokit.request('GET ' + path)
    .then(({ data, headers }) => {
      const pagination = parse(headers.link)
      res.send({ data, pagination })
    })
})

app.listen(port, () => console.log(`Listening on port ${port}`))
