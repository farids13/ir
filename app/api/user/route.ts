import { InsertUserDTO } from "@/dto/user/InsertUserDTO";
import { ValidationException } from "@/error/ValidationError";
import { PrismaClient } from "@prisma/client";
import { validate } from "class-validator";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { networkInterfaces } from "os";
import { z } from "zod";

/**
 * @swagger
 * /api/user:
 *   get:
 *     description: get user list
 *     tags: ["User"]
 *     summary: get user list
 *     responses:
 *       200:
 *         description: Get User List
*/


const prisma = new PrismaClient();

// Get List
export async function GET() {
    try {
        const users = await prisma.user.findMany({
            where: {
                deletedAt: null
            },
            orderBy: {
                updatedAt: 'desc',
            }
        });
        return NextResponse.json(users);
    } catch (error) {
        return new Response('Internal Server Error ' + error, { status: 500 });
    }
}   

// Insert New User




export async function POST(req: Request) {
    const body = await req.json();

    const insertUserDTO = new InsertUserDTO(body.name, body.email, body.phoneNumber, body.password);
    const errors = await validate(insertUserDTO);

    if(errors.length > 0) return ValidationException(errors.map(error => Object.values(error.constraints || "")).join(", "));

    const checkEmail = await prisma.user.findFirst({
        where: {
            email: body.email
        }
    })
    
    if(checkEmail) return ValidationException('Email already exists');

    const user = await prisma.user.create({
        data: body
    });
    return NextResponse.json(user);
}