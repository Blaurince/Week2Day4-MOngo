import { client, fruitCollection } from "../mongoconnect.js";

client.connect();
const deletedFruit = async () => {

    try {
      await client.connect()
      const itemDeleted = await fruitCollection.deleteOne({ name: "watermelon" });
    console.log(itemDeleted);
  
  
    } catch (error) {
      console.log(error)
    } finally {
      await client.close()
    }
  
  }
  
  deletedFruit();