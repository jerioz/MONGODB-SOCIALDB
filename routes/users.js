const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')
const {authentication} = require('../middlewares/authentication')

const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "artwork"
    }
})

cloudinary.config({ 
    cloud_name: '', 
    api_key: '', 
    api_secret: '' 
  });


const multer = require('multer')
const upload = multer({storage})

router.post('/newUser', UserController.newUser)
router.post('/login', UserController.login)
router.delete('/logout', authentication, UserController.logout)
router.get('/getUserLogin', authentication, UserController.getUserLogin)
router.get('/getUserByName/:name', UserController.getUserByName)
router.get('/getUserById/:_id', UserController.getUserById)
router.put('/updateUserid/:_id', authentication, upload.single('image'), UserController.updateUserImg)
router.get('/confirm/:emailToken', UserController.confirm )
router.put('/likeUser/:_id', authentication, UserController.likeUser)
router.delete('/removeLikeUser/:_id', authentication, UserController.removeLikeUser)
router.get('/getUserLoginFollower', authentication, UserController.getUserLoginFollower)

module.exports = router
