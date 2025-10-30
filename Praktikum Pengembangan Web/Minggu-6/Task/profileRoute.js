// profileRoute.js
import { Router } from "express";

const router = Router();

router.get("/:username", (req, res) => {
    res.sendFile(process.cwd() + "/public/profile.html");
});

router.get("/", (req, res) => {
    res.sendFile(process.cwd() + "/public/profile.html");
});

export default router;
