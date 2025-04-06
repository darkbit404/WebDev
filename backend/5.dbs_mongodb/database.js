const {MongoClient} = require("mongodb")

const URI = "mongodb+srv://pratyushks2401:<db-password>>@practice.zej3cag.mongodb.net/";
const client = new MongoClient(URI);
const dbName = "SampleDB";

async function main() {
    await client.connect();
    console.log("Connection Successful");
    const db = client.db(dbName);
    const collection = db.collection("User");

    //Insert single document in DB
    const data = [
        {
            firstName: "Raj",
            lastName: "Gulati",
            age: 23,
            city: "Dehradun"
        }
    ]; 
    const insertOneDoc = await collection.insertMany(data);
    console.log("Inserted Documents: ", insertOneDoc);

    //Insert multiple documents in DB
    const multipleDocs = [
        {
            firstName: "Aarav",
            lastName: "Patel",
            age: 28,
            city: "Mumbai"
        },
        {
            firstName: "Ishan",
            lastName: "Gupta",
            age: 22,
            city: "Bangalore"
        }
    ];
    const insertMultiDocs = await collection.insertMany(multipleDocs);
    console.log("Inserted Documents: ", insertMultiDocs);

    //Find all documents in DB
    //Finds all documents in the DB
    const findAllResult = await collection.find({}).toArray();
    console.log("Found Documents: ", findAllResult);

    //Find document in DB according to filter
    //Finds documents where firstName is Shrishti
    const findOneResult = await collection.find({firstName: "Raj"}).toArray();
    console.log("Found Documents: ", findOneResult);

    //Delete documents in DB
    //Deletes documents where lastName is Rawat
    const deleteResult = await collection.deleteMany({ lastName: "Patel" });
    console.log('Deleted documents: ', deleteResult);

    return "Done";
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());