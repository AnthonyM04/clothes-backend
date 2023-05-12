import { MongoCredentials } from '../secrets.js';
import { MongoClient } from 'mongodb';

export default function dbConnect() {
    const client = new MongoClient(MongoCredentials.URI)
    return client.db(MongoCredentials.DB)
}

// this code connects to the mongoDB database
// dbConnect() function is exported to be used in the Create, Read, Update, Delete functions 
// the client is declared as a new (new as in new instance) MongoClient (MongoClient allows communication to be possible to the MongoDB server)
// MongoCredentials.URI is a variable propert that pulls from the URI part of MongoCredentials (ex: mongo+srv//name:psw)

// it returns a client.db() method to access the database of the server
// MongoCredentials.DB is the name of the database (ex: fits-database)