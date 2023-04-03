import { client, toysCollection } from "../mongoconnect.js";

client.connect()

const editToys = async () => {
    // collection.findOne({ name: 'Optimus Prime})
    const updatedToy = await toysCollection.findOneAndUpdate(
      { 
        name: "Optimus Prime"
      },

      {
        '$set': { name: "Prime Ok"}
      },
    
  )
    console.log(updatedToy);

  };
  
  editToys()