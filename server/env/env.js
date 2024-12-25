import "dotenv/config"

const Env ={
    "NODE_ENV":process.env.NODE_ENV || "development",
    "PORT":process.env.PORT || "5000"
}

export default Env;