import {currentUser, redirectToSignIn} from "@clerk/nextjs";

import { db } from "./db";

export const initialProfile = async () => {
    const user = await currentUser();

    if (!user) {
        return redirectToSignIn();
    }

    const profile =  db.profile.findUnique({
        where: {
            userId: user.id
        }
    });
    // console.log(profile.then(res => console.log(res?.userId)))
    if(profile) {
       return profile;
    }

    const newProfile = await db.profile.create({
        data: {
            userId: user.id,
            name: `${user.firstName} ${user.lastName}`,
            imageURL: user.imageUrl,
            email: user.emailAddresses[0].emailAddress,

        }
    })
    console.log(newProfile)

    return newProfile;

}