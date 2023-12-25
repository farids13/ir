import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function DELETE (req:Request, {params} : {params : {id:string}}) {
    const user = await prisma.user.update({
        where:{
            id : params.id,
        },
        data: {
            deletedAt: new Date(),
        }
    });
    return NextResponse.json(user, {status:200});
    
};

export async function PUT(req:Request, {params} : {params : {id:string}}) {
    const body = await req.json();
    const user = await prisma.user.update({
        where:{
            id : params.id,
        },
        data: body
    });
    return NextResponse.json(user, {status:200});
}