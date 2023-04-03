import { client, toysCollection} from "../mongoconnect.js";

client.connect();
const deletedToys = async () => {

    try {
      await client.connect()
      const itemDeleted = await toysCollection.deleteOne({ name: "Prime Ok" });
      console.log(itemDeleted);
 
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }

}
  deletedToys();