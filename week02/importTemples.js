require('dotenv').config();
const { MongoClient, ObjectId } = require('mongodb');
const templesData = require('./temples.json');

const uri = process.env.MONGODB_URI;

async function importTemples() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('temples');
    
    const temples = templesData.map(temple => ({
      ...temple,
      _id: new ObjectId(temple._id.$oid)
    }));
    
    await collection.deleteMany({});
    const result = await collection.insertMany(temples);
    console.log(`${result.insertedCount} temples imported successfully`);
  } finally {
    await client.close();
  }
}

importTemples().catch(console.error);
