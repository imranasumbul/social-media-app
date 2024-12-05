interface updationprops {
    userId? : string,
    name: string,
    username: string,
    bio: string
}
export default async function updateUserProfile({userId, name, username, bio }: updationprops){
    try{
        const user = await prisma?.user.findUnique({
            where: {
                username
            }
        })
        if(user){
            return new Error(`Username already taken. Try something else`);
        }
        const updatedUser = await prisma?.user.update({
            where: {
                id: userId

            },
            data: {
                name,
                username,
                bio
            }
        })

        return updatedUser;
    }catch(error){
        console.log(error);
        throw new Error(`An internal error occured. Please try again later`)
    }
}