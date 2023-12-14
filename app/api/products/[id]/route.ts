import { Prisma, PrismaClient } from "@prisma/client"
import { Product } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const DELETE = async (req:Request, {params} : {params : {id:string}}) => {
    const product = await prisma.product.delete({
        where:{
            id : Number(params.id),
        }
    });
    return NextResponse.json(product, {status:200})
};

export const PUT = async (req:Request, {params} : {params:{id:string}}) => {
    const body : Product = await req.json();
    const product = await prisma.product.update({
        where:{
            id: Number(params.id),
        },
        data: {
            title: body.title,
            price: body.price,
            brandId: body.brandId,
        }
    });
    return NextResponse.json(product, {status:200})
}