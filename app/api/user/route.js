import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

export async function GET(){
    const prisma = new PrismaClient();
    const users = await prisma.user.findMany();
    return Response.json(users);
}

export async function POST(request){
    const formData = await request.formData();
    const prisma = new PrismaClient();
    const user = await prisma.user.create({
        data: {
            first_name: formData.get("first_name"),
            last_name: formData.get("last_name"),
            email: formData.get("email"),
            password: formData.get("password"),
        },
    })
    return Response.json(user);
}