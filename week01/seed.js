const { MongoClient } = require('mongodb');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DB_NAME = 'cse341';
const COLLECTION_NAME = 'professional';

const professionalData = {
  professionalName: 'Your Name',
  base64Image: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
  nameLink: {
    firstName: 'Your Name',
    url: 'https://example.com'
  },
  primaryDescription: ' is a web developer',
  workDescription1: 'I am currently working on various web development projects.',
  workDescription2: 'I enjoy building full-stack applications and learning new technologies.',
  linkTitleText: 'Connect with me:',
  linkedInLink: {
    text: 'LinkedIn Profile',
    link: 'https://linkedin.com/in/yourprofile'
  },
  githubLink: {
    text: 'GitHub Profile',
    link: 'https://github.com/yourusername'
  }
};

async function seedDatabase() {
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db(DB_NAME);
  
  await db.collection(COLLECTION_NAME).deleteMany({});
  await db.collection(COLLECTION_NAME).insertOne(professionalData);
  
  console.log('Database seeded successfully');
  await client.close();
}

seedDatabase().catch(console.error);
