const express = require('express');
const serversLogic = require('../logic/servers-logic');
const router = express.Router();

router.get("/", async (request, response, next) => {
    try {
        let result = await serversLogic.getAllServers();
        response.json(result);
    }
    catch (error) {
        return next(error);
    }
});


router.put("/:id", async (request, response, next) => {
    try {
        let id = request.params.id;
        let updatedServer = request.body;
        let result = await serversLogic.updateServer(updatedServer,id);
        response.json(result);
    }
    catch (error) {
        return next(error);
    }
});


module.exports = router;