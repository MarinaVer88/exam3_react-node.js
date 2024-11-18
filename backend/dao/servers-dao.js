const connection = require("./connection-wrapper");
let ServerError = require("../errors/server-error");
let ErrorType = require("../errors/error-type");
const { NO_SERVERS_DATA } = require("../errors/error-type");

async function getAllServers(){
    let sql = `select s.name, 
                        c.name as company_name, 
                        s.ip, 
                        date_format(s.datetime,'%d/%m/%Y %H:%i:%s') as datetime,
                        s.status
                        from servers s join companies c
                        on s.hosting_company_id = c.id`
    let serversList;
    try {
        serversList = await connection.execute(sql);   
        
    }
    catch(error){
        console.error(err);
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, error)
    }

    if (serversList == null || serversList.length == 0){
        throw new ServerError(NO_SERVERS_DATA);
    }

    return serversList;
}


async function updateServer(updatedServer,id){
    let sql = `update servers 
                set status=? 
                where id=?`;
    let parameters = [updatedServer.status, id];
    try {
        let serversList = await connection.executeWithParameters(sql, parameters);   
        return serversList;
    }
    catch(error){
        console.error(err);
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, error)
    }
}

module.exports = {
    getAllServers,
    updateServer
}