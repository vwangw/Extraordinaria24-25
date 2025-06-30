export const schema = `#graphql
    type Contact{
        id:ID!
        name:String!
        phone:String!
        country:String!
        localtime:String!
    },

    type Query{
        getContact(id:ID!):Contact
        getContacts:[Contact!]!
    },

    type Mutation{
        addContact(name:String!, phone:String!):Contact!
        deleteContact(id:ID!):Boolean!
    }
`