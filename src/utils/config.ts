import dotenv from "dotenv"

dotenv.config()

export const appConfig = {
    SecretKey : process.env.JWT_SECRET! || "secret"
}