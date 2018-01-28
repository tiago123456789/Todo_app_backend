const constantes = {
    dev: {
        PORT: process.env.PORT || 3000,
        URL_DB: "mongodb://mongodb:27017/todo",
        TIME_EXPIRED_TOKEN: "1h",
        HEADER_PARAM_AUTH: "Authorization",
        TOKEN_SECRET: "secret"
    },
    prd: {
        PORT: process.env.PORT,
        URL_DB: `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ds239587.mlab.com:39587/todo_app_db`,
        TIME_EXPIRED_TOKEN: "1h",
        HEADER_PARAM_AUTH: "Authorization",
        TOKEN_SECRET: "secret"
    },
    test: {
        PORT: process.env.PORT,
        URL_DB: "mongodb://mongodb:27017/todo_test",
        TIME_EXPIRED_TOKEN: "1h",
        HEADER_PARAM_AUTH: "Authorization",
        TOKEN_SECRET: "secret"
    }
};

export default constantes[process.env.NODE_ENV];