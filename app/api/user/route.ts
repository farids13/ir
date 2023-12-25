import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
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
                createdAt: 'desc',
                updatedAt: 'desc'
            }
        });
        return NextResponse.json(users);
    } catch (error) {
        return new Response('Internal Server Error ' + error, { status: 500 });
    }
}   

// Insert New User


export const userInsertSchema = z.object({
    name: z.string().min(3),
    phoneNumber: z.string().regex(/^[0-9]{10,12}$/),
    email: z.string().email(),
    password: z.string(),
  });

export async function POST(req: Request) {
    const body = await req.json();
    userInsertSchema.parse(body);

    const checkEmail = await prisma.user.findFirst({
        where: {
            email: body.email
        }
    })
    if(checkEmail) throw ValidationException('Email already exists');

    const user = await prisma.user.create({
        data: body
    });
    return NextResponse.json(user);
}