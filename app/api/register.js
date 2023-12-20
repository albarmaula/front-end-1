// pages/api/register.js
import prisma from "../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email, password, firstName, lastName } = req.body;

  try {
    const user = await prisma.user.create({
      data: {
        email,
        first_name: firstName,
        last_name: lastName,
      },
    });

    res.status(201).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
