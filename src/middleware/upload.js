import multer from "multer";
import fs from "fs"
import path from "path";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url)
export const dirname = path.dirname(filename)
const uploaddir = path.join(dirname,"../../uploads/images")
fs.mkdirSync(uploaddir,{recursive:true})

const storage= multer.diskStorage({
    destination(req,file,cb){
        cb(null,uploaddir)
    },
    filename(req,file,cb){
        const uniqe= "ashish"+Date.now()
        cb(null,uniqe+path.extname(file.originalname))
    }
})

export const upload= multer({
    storage,limits:{fileSize:10*1024*1024}
})








































// const filename = fileURLToPath(import.meta.url)
// const dirname = path.dirname(filename)
// const uploaddir=path.join(dirname,"../../uploads/images")
// fs.mkdirSync(uploaddir,{recursive:true})

// const storage= multer.diskStorage({
//     destination(req,file,cb){
//         cb(null,uploaddir)
//     },
//     filename(req,file,cb){
//         const unique="Products"+"_"+Date.now()
//         cb(null,unique+path.extname(file.originalname))
//     }
// })

// const upload = multer({
//     storage,limits:{fileSize:10*1024*1024}
// })
// export default upload
