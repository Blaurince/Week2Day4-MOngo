
import {client, fruitCollection} from '../mongoconnect.js'

client.connect()
const getAllFruits = async () => {
   
    try {
      await client.connect()
      const allFruits = await fruitCollection.find().toArray()
       console.log(allFruits)

    } catch (error) {
      console.log(error)
    } finally {
      await client.close()
    }
}

getAllFruits()