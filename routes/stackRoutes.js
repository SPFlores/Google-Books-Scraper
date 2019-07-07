const { Stack } = require('../models')
const axios = require('axios')
const cheerio = require('cheerio')

module.exports = app => {
  app.get('/scrape', (req, res) => {
    axios.get('https://stackoverflow.com/')
      .then(({ data }) => {
        const $ = cheerio.load(data)
        $('div.summary').each((i, elem) => {
          Stack.find({ link: `http://stackoverflow.com/${$(elem).children('h3').children('a').attr('href')}` })
            .then(stack => {
              if (stack.length === 0) {
                Stack.create({
                  title: $(elem).children('h3').children('a').text(),
                  link: `http://stackoverflow.com/${$(elem).children('h3').children('a').attr('href')}`,
                  favorite: false
                })
              }
            })
            .catch(e => console.log(e))
        })
        res.sendStatus(200)
      })
      .catch(e => console.log(e))
  })

  // get all stacks
  app.get('/stacks', (req, res) => {
    Stack.find({})
      .then(stacks => res.json(stacks))
      .catch(e => console.log(e))
  })

  // get favorites
  app.get('/favorites', (req, res) => {
    Stack.find({ favorite: true })
      .then(stacks => res.json(stacks))
      .catch(e => console.log(e))
  })

  // update when favorited
  app.put('/stacks/:id', (req, res) => {
    Stack.findByIdAndUpdate(req.params.id, { favorite: true })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  // delete
  app.delete('/stacks/:id', (req, res) => {
    Stack.findByIdAndDelete(req.params.id)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })

}
