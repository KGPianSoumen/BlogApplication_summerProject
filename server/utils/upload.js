
import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
    url: `mongodb://${USERNAME}:${PASSWORD}@ac-rwbxxic-shard-00-00.umqwr0r.mongodb.net:27017,ac-rwbxxic-shard-00-01.umqwr0r.mongodb.net:27017,ac-rwbxxic-shard-00-02.umqwr0r.mongodb.net:27017/?ssl=true&replicaSet=atlas-sgydxz-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if (match.indexOf(file.memeType) === -1) {
            return `${Date.now()}-blog-${file.originalname}`;
        }

        return {
            bucketName: "photos",
            filename:`${Date.now()}-blog-${file.originalname}`
        }
    }
})

export default multer({ storage });