import { client, fruitCollection } from "../mongoconnect.js";

client.connect()

const editFruits = async () => {
    // collection.findOne({ name: 'Cantaloupe})
      const updatedFruit = await fruitCollection.findOneAndUpdate(
       { 
            name: "Mango",
       },
       {
         "$set": {
            "name":"Peach"
         }
       }
    )
  
    console.log(updatedFruit);
  };
  
  editFruits()