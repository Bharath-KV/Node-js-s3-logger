const AWS = require('aws-sdk')

AWS.config.update({
    accessKeyId: 'aws-access-key',
    secretAccessKey: 'aws-secret-key',
    region: 'aws-region'
})

const s3 = new AWS.S3()

module.exports = (data) => {

    const params = {
        Bucket: 'bucket-name',
        Key: 'path-to-file/filename.log',
        Body: data
    }

    s3.upload(params, (err) => {
        console.log('s3 upload error:: \n', err)
    })

}
