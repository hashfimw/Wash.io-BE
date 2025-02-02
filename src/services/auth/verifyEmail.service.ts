import { Request, Response } from "express"
import { verify } from "jsonwebtoken";
import prisma from "../../prisma";
import { appConfig } from "../../utils/config";


export const verifEmailService = async (req: Request, res: Response) =>{
    try {
        const { token } = req.params;
        
              if (!token || typeof token !== "string") {
                return res.status(400).send({ message: "Invalid or missing token!" });
              }
        
              // Verify the token
              const decoded: any = verify(token, appConfig.SecretKey);
        
              // Find the user and mark them as verified
              const user = await prisma.user.findUnique({
                where: { id: decoded.id },
              });
        
              if (!user) {
                return res.status(404).send({ message: "User not found!" });
              }
        
              if (user.isVerified) {
                return res.status(400).send({ message: "Email already verified!" });
              }
        
              await prisma.user.update({
                where: { id: user.id },
                data: { isVerified: true },
              });
        
              res.status(200).send({ message: "Email successfully verified ! ✅" });
    } catch (error) {
        throw error;
    }
}