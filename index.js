const addFruit = async () => {
  const myFruit = {
    name: "Cantaloupe",
    taste: "Sour",
    price: 4,
    stock: 5,
  };

  const addedFruit = await collection.insertOne(myFruit);
  console.log(addedFruit);
};
//addFruit()

try {
await client.connect()
const addedFruit = await collection.insertOne(myFruit)
} catch(error) {
  console.log(error)
} finally {
  await client.close()
}



const getAllFruits = async () => {
   
      try {
        await client.connect()
        const allFruits = await collection.find().toArray()
         console.log(allFruits)

      } catch (error) {
        console.log(error)
      } finally {
        await client.close()
      }

  

  // collection
  //   .find()
  //   .toArray()
  //   .then((items) => console.log(items))
  //   .catch((err) => console.log(err));

   // console.log(allFruits);
};

//getAllFruits();


const deleteFruit = async () => {

  try {
    await client.connect()
    const itemDeleted = await collection.deleteOne({ name: "Pineapple" });
  console.log(itemDeleted);


  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }

}

// deleteFruit();
