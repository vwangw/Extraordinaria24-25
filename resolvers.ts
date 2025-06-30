import { Collection, ObjectId } from "mongodb";
import { ContactModel } from "./types.ts";

type Context = {
    ContactCollection:Collection<ContactModel>;
}

export const resolvers = {
    Contact:{
        id:(parent:ContactModel) => parent._id!.toString(),

    },

    Query:{
        getContact:async(_:unknown, args:{id:string}, ctx:Context): Promise<ContactModel|null> => {
            const contact = await ctx.ContactCollection.findOne({_id: new ObjectId(args.id)});
            return contact;
        },
        
        getContacts:async(_:unknown, _args:{}, ctx:Context): Promise<ContactModel[]> => {
            const contacts = await ctx.ContactCollection.find().toArray();
            return contacts;
        }
    },

    Mutation:{

    }
}