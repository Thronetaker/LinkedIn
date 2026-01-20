import {Router } from "express";
import { register , login, uploadProfilePicture,updateProfileData, updateUserProfile,getUserandProfile, getAllUserProfile, downloadProfile} from "../controllers/user.controller.js";
import multer from "multer";
const router  = Router();

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, "upload")
    },
    filename: (req,file,cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({storage: storage})


router.route("/update_profile_picture")
.post(upload.single('profile_picture'), uploadProfilePicture)

router.route('/register').post(register);
router.route('/login').post(login);
router.route("/user_update").post(updateUserProfile);  
// name n username n email

router.route('/get_user_and_profile').get(getUserandProfile);
router.route('/update_profile_data').post(updateProfileData);
router.route("/user/get_all_users").get(getAllUserProfile);
router.route("/user/download_resume").get(downloadProfile);

export default router;


// http://localhost:9090/user/download_resume?id=6965337e416e9359095ae69b

// http://localhost:9090/a31469446008468e80ff4b7ae6082bc3c5811421357e64ac3c4e4415f8b555e2.pdf