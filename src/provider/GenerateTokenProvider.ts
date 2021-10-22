import { sign } from "jsonwebtoken"


class GenerateTokenProvider{

    async execute(userId: string){
        const token = sign({}, "9797d094-c181-47de-a3bd-4bcf2405d2e8", {
            subject: userId,
            expiresIn: "20s"
        });
        return token;
    }
}

export { GenerateTokenProvider }