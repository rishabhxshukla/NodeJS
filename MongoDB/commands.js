/* SHOW DATABASES */
show dbs
show databases


/* USE (or) CREATE DATABASE */
use mydb


/* DELETE DATABASE */
db.dropDatabase()


/*---------------------------------------------*/


/* CREATE COLLECTION */
db.employees.insertOne(
    { key: "value" }
)


/* SHOW COLLECTIONS */
show collections


/* DELETE COLLECTION */
db.employees.drop()


/* DOCUMENT COUNT */
db.employees.countDocuments()


/*---------------------------------------------*/


/* INSERT ONE */
db.employees.insertOne(
    { name: "John Snow", dept: "IT" }
)


/* INSERT MANY */
db.employees.insertMany([
    { name: "Peter Smith", dept: "Sales" },
    { name: "Tifanny Koln", dept: "IT" }
])


/*---------------------------------------------*/


/* UPDATE ONE */
db.employees.updateOne(
    { name: "Rishabh Shukla" },
    { $set: { name: "Updated Shukla" } }
)


/* UPDATE MANY */
db.employees.updateMany(
    { dept: "IT" },
    { $set: { age: 100 } }
)


/* ADDING A FIELD IN ONE */
db.products.updateOne(
    { price: 1000 },
    { $set: { newField: "newValue" } }
)


/* ADDING A FIELD IN MANY */
db.products.updateMany(
    { price: 1000 },
    { $set: { newField: "newValue" } }
)


/* REMOVING A FIELD FROM ONE */
db.products.updateOne(
    { price: 1000 },
    { $unset: { isFeatured: 1 } }
)


/* REMOVING A FIELD FROM MANY */
db.products.updateMany(
    { price: 1000 },
    { $unset: { isFeatured: 1 } }
)


/* RENAMING A FIELD IN ONE */
db.products.updateOne(
    { price: 1000 },
    { $rename: { name: "itemName" } }
)


/* RENAMING A FIELD IN MANY */
db.products.updateMany(
    { price: 1000 },
    { $rename: { name: "itemName" } }
)


/* PUSH IN ARRAY */
db.products.updateOne(
    { price: 1000 },
    { $push: { arr: 10 } }
)

db.products.updateMany(
    { price: 1000 },
    { $push: { arr: 10 } }
)


/* POP IN ARRAY */
db.products.updateOne(
    { price: 1000 },
    { $pop: { arr: 1 } }
)

db.products.updateMany(
    { price: 1000 },
    { $pop: { arr: 1 } }
)


/*---------------------------------------------*/


/* DELETE ONE */
db.employees.deleteOne(
    { id: 101 }
)


/* DELETE MANY */
db.employees.deleteMany(
    { dept: "HR" }
)


/* DELETE ALL */
db.employees.deleteMany({})


/*---------------------------------------------*/


/* FIND ONE */
db.employees.findOne({ name: "Rishabh Shukla" })


/* FIND MANY */
db.employees.find({ dept: "Sales" })
db.employees.find({ id: 10 }, { name: "Alex" })


/* FIND ALL */
db.employees.find()


/* ONLY SHOW NAMES */
db.employees.find({}, { name: 1 })


/* SHOW EVERYTHING EXCEPT NAMES */
db.employees.find({}, { name: 0 })


/* ONLY SHOW NAMES WHERE DEPT = IT */
db.employees.find({ dept: "IT" }, { name: 1 })


/* SHOW EVERYTHING EXCEPT NAME WHERE DEPT = IT */
db.employees.find({ dept: "IT" }, { name: 0 })


/*---------------------------------------------*/


/* LIMIT */
db.employees.find({ dept: "IT" }).limit(3)


/* SKIP */
db.employees.find({ dept: "IT" }).skip(3)


/* COUNT */
db.products.find().count()


/* SORT */
// 1 for ascending, -1 for descending
db.products.find().sort({ price: 1 })


/*---------------------------------------------*/


/* LESS THAN */
db.products.find({
    price: { $lt: 1000 }
})


/* LESS THAN EQUAL TO */
db.products.find({
    price: { $lte: 1000 }
})


/* GREATER THAN */
db.products.find({
    price: { $gt: 1000 }
})


/* GREATER THAN EQUAL TO */
db.products.find({
    price: { $gte: 1000 }
})


/* EQUAL TO */
db.products.find({
    price: { $eq: 1000 }
})


/* NOT EQUAL TO */
db.products.find({
    price: { $ne: 1000 }
})


/* IN */
db.products.find({
    price: { $in: [1000, 2000, 3000] }
})


/* NOT IN */
db.products.find({
    price: { $nin: [1000, 2000, 3000] }
})


/*---------------------------------------------*/


/* AND */
db.products.find({
    $and: [
        { price: { $gt: 1000 } },
        { price: { $lt: 2000 } }
    ]
})


/* OR */
db.products.find({
    $or: [
        { price: { $gt: 1000 } },
        { name: "Diamond Ring" }
    ]
})


/* NOT */
db.products.find({
    $nor: [
        { price: { $gt: 1000 } },
        { name: "Diamond Ring" }
    ]
})


/* NOT */
db.products.find({
    price: { $not: { $eq: 1000 } }
})


/*---------------------------------------------*/


/* CHAINING */
db.products.find({
    'details.price': { $gt: 1000 }
})


/*---------------------------------------------*/


/* ALL */
db.products.find({
    name: { $all: ["Diamond Ring"] }
})


/*---------------------------------------------*/


/* SEARCH COST */
db.products.find().explain("executionStats")


/* CREATING A FIELD AS INDEX */
db.products.createIndex({ name: 1 })


/* REMOVING A FIELD AS INDEX */
db.products.dropIndex({ name: 1 })


/*---------------------------------------------*/