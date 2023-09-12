import multer from 'multer';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk'
import dotenv from 'dotenv'

dotenv.config();

aws.config.update({
    region: 'ap-south-1',
    secretAccessKey: 'CSjMZLSeJqWfg+y+qkbODyBtGE2n4WKv5hlelPys',
    accessKeyId: 'AKIA5XMQDBXSEZPE6ZSN',
});

const s3 = new aws.S3();
console.log('BUCKET_NAME:', process.env.BUCKET_NAME);
console.log('ID:', process.env.ACCESS_KEY_ID);

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'imagebuckettwitter',
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, { fileName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString());
        }
    })
})

export default upload;