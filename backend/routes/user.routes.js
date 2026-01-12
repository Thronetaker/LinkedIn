import {Router } from "express";
import { register , login, uploadProfilePicture, updateUserProfile,getUserandProfile} from "../controllers/user.controller.js";
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

router.route('/get_user_and_profile').get(getUserandProfile);

export default router;