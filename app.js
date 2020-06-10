const express = require('express')

const app = express()

app.get('/some-endpoint', (req, res) => {
    try {
        // Your logic here
        return res.status(200).json({ /* success response */ })
    } catch (error) {
        return res.status(500).json({ /* error response */ })
    }
})

app.listen(8000, 'localhost', () => {
    console.log('Server running..')
})

