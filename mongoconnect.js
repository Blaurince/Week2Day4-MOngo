import dotenv from 'dotenv' 
import { MongoClient } from "mongodb";
dotenv.config()



//const MONGOURI =  "mongodb+srv://barbaralaurince:bcpassword@products-database.bykk1hv.mongodb.net/test"
 const MONGOURI = process.env.MONGOURI
   
// create instanse of mongo
export const client = new MongoClient(MONGOURI); // use the URI path

// connect  to the client
client.connect();

// connect to db = or create aif there is mone
const database = client.db("products");


// connect to collection = or create if none
// const collection = database.collection("fruits");

export const fruitCollection = database.collection('fruits')
export const toysCollection = database.collection('toys')
export const iceCreamCollection = database.collection('iceCreams')



// create instanse of mongo