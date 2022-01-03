const express = require("express");
const { getAllRooms, createRoom } = require("../controllers/roomcontroller");

const router = express.Router();

router.route("/rooms").get(getAllRooms);
router.route("/room/new").post(createRoom);

module.exports = router;