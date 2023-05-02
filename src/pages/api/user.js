const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

 export default async function handle(req,res) {
    const {method} = req
    switch(method){
        case 'POST':
            const {email,password,confirmPassword} = req.body 
            const user = await prisma.user.create({
                data:{
                    email,
                    password,
                    confirmPassword
                }
            })

            res.status(201).json(user)
            break
            default:
            res.status(405).end(`Method ${method} Not Allowed`)
    }

}