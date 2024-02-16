import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getDataPost = async() => {
    const data = await prisma.post.findMany();
    return data;
}

export const updatePostData = async(
    data: Prisma.PostUpdateInput,
    id: number
) => {
    const post = await prisma.post.update({
        where: {id: id},
        data: {
            title: data.title,
            published: data.published,
        },
    })

    return post;
}

export const getDetailPost = async(id: number) => {
    const post = await prisma.post.findFirst({
        where: {id: id},
    });

    return post;
}