import { client, toysCollection } from "../mongoconnect.js";

client.connect();

const addtoy = async () => {
  
  const myToy = {
    name: "Pokemon",
    type: "Transformer",
    cool: "true",
    price: 50,
    description: "leader autobot ral cool blue semitruck",
  }


const addedToy = await toysCollection.insertOne(myToy);
console.log(addedToy);
};

addtoy();
