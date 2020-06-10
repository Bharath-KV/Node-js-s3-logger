const express = require('express')
const winston = require('winston')
const s3_upload = require('./s3_upload')

const logger = winston.createLogger({
    transports: [ new winston.transports.Console() ]
})

logger.on('data', (chunk => { // log listener
    s3_upload(JSON.stringify(chunk)) // call s3 uploader and pass stringyfied json log
}))

const app = express()

app.get('/some-endpoint', (req, res) => {
    try {
        // Your logic here
        return res.status(200).json({ /* success response */ })
    } catch (error) {
        logger.error(error.toString()) // log emitter
        return res.status(500).json({ /* error response */ })
    }
})

app.listen(8000, 'localhost', () => {
    console.log('Server running..')
})

