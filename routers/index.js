const router = require("express").Router();
const PhotoController = require("../controllers/photoControllers");
const UserControllers = require("../controllers/userControllers");

router.post("/users/register", UserControllers.userRegister);
router.post("/users/login", UserControllers.userLogin);

router.get("/photos", PhotoController.getAllPhotos);
router.get("/photos/:id", PhotoController.getOnePhotoById);
router.post("/photos", PhotoController.createPhoto);
router.put("/photos/:id", PhotoController.updateOnePhotoById);
router.delete("/photos/:id", PhotoController.deleteOnePhotoById);

module.exports = router;
