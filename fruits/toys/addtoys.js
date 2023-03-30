import {client, toysCollection} from '../mongoconnect.js'

client.connect()

    const addToy = async () => {

        
        const myToy = {
            name: 'Optimus Prime',
            type: 'Transformer',
            cool: 'true',
            price: '40',
            description: 'leader autobot ral cool blue semitruck'

        }
    }

    await toysCollection.insertOne(mytoy)
    console.log(addedToy)


addToy()


