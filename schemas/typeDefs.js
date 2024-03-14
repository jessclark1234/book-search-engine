const typeDefs = `
type Book {

}

type Query {
users: [User]
user(username: String!: User
    books)
}

type Auth {

}

type Mutation {
    addUser
    login
    saveBook
    deleteBook

}
`

module.exports = typeDefs;