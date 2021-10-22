import { client } from "../prisma/client";
import dayjs from "dayjs";


class GenerateRefreshToken {
    
    async execute(userId: string){

        const expiresIn = dayjs().add(15, "second").unix();

        try{
            const generateRefreshToken = await client.refreshToken.create({
                data: {
                    expiresIn,
                    userId
                }
            });
            return generateRefreshToken;

        }catch(err){
            console.log(err)
            throw new Error(err.message);
        }
        

    }
}

export { GenerateRefreshToken }