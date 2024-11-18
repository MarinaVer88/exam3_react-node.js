let ErrorType = {
    GENERAL_ERROR: {
        id: 1,
        httpCode: 600,
        message: "A general error. Something went wrong...",
        isShowStackTrace: true
    },
    NO_SERVERS_DATA: {
        id: 2,
        httpCode: 603,
        message: "There are no servers data now, please check it later",
        isShowStackTrace: false
    },
    
}

module.exports = ErrorType;