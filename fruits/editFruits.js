import { client, fruitCollection } from "../mongoconnect.js";

client.connect()

const editFruit = async () => {
    // collection.findOne({ name: 'Cantaloupe})
    const updatedFruit = await fruitCollection.findOneAndUpdate(
      { name: "Pineapple" },
      { $set: { name: "Grape" } }
    );
  
    console.log(updatedFruit);
  };
  
  editFruit()