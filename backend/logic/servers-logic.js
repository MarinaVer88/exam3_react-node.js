const serversDao = require("../dao/servers-dao");

async function getAllServers(){
    return await serversDao.getAllServers();
}

async function updateServer(updatedServer,id){
    return await serversDao.updateServer(updatedServer,id);
}

module.exports = {
    getAllServers,
    updateServer
}
