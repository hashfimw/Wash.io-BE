import { Request, Response } from "express"; // Added Response import
import { verify } from "jsonwebtoken";
import prisma from "../../prisma";
import { genSalt, hash } from "bcrypt";
import { appConfig } from "../../utils/config";

export const completeRegistService = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { token, fullName, password } = req.body;

    // Validate input
    if (!token || !fullName || !password) {
      res.status(400).send({ message: "Missing required fields!" });
    }

    // Verify the token
    const decoded: any = verify(token, appConfig.SecretKey);

    // Find the user and check if the email is already verified
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
    });

    if (!user) {
      res.status(404).send({ message: "User not found!" });
    }

    // Hash the password
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    // Update the user with the full name and password
    await prisma.user.update({
      where: { id: user?.id },
      data: {
        fullName,
        password: hashedPassword,
        isVerified: true, // Mark as verified after completing registration
      },
    });

    res
      .status(200)
      .send({ message: "Registration is completed successfully! ✅" });
  } catch (error) {
    throw error;
  }
};
