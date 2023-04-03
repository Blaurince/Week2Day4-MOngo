import {client, fruitCollection} from '../mongoconnect.js'
// connect to collection = or create if none
// const collection = database.collection("fruits");



const addFruit = async () => {

  const myFruit = {
    name: "Strawberry",
    taste: "Sweet",
    price: 5,
    stock: 5,
  }

  try {
    await client.connect();
    const addedFruit = await fruitCollection.insertOne(myFruit)
    console.log(addedFruit);
  } catch(error) {
      console.log(error)
  } finally {
      await client.close()
  }
};

  // const addedFruit = await fruitCollection.insertOne(myFruit);
  // console.log(addedFruit);
 

addFruit()