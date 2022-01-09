const express = require("express");
const { getAllRooms, createRoom } = require("../controllers/roomController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/rooms").get(getAllRooms);
router.route("/room/new").post(isAuthenticatedUser, authorizeRoles("admin"), createRoom);

module.exports = router;
