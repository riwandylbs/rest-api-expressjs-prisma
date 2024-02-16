import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// export const showDataTestTable = async() => {
//     const data = await prisma.testTable.findMany();
//     return data;
// }