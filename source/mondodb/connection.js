const MongoClient = require('mongodb').MongoClient;

async function getConnection() {
    // Connection URL
    const url = 'mongodb+srv://venkatshiva:P%40%40ji143@cluster0-vuxbg.mongodb.net/test?retryWrites=true&w=majority';
    // Database Name
    
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology:true });
    try {
      await client.connect();
      // const db = client.db(dbName);
      console.log('Connection established');
      return client;
    } catch (err) {
      console.log(err.stack);
      return null;
    }
}
export default getConnection;
// dbconn.then((client)=>{
//     console.log('conn-->',dbconn);
//     const dbName = 'mymoney';
//     const db = client.db(dbName);
//     console.log('database->',db);
//     client.close();
// })

