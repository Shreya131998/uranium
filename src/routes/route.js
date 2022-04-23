const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middware=require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",middware.authenticate,middware.authorise, userController.getUserData)
router.post("/users/:userId/posts",middware.authenticate,middware.authorise, userController.postMessage)

router.put("/users/:userId",middware.authenticate,middware.authorise, userController.updateUser)
router.delete('/users/:userId',middware.authenticate,middware.authorise, userController.deleteUser)

module.exports = router;