const models = require('../models');
const db = require('../config/connection');

module.exports = async (modelName, collectionName) => {
    try {
        const model = await models[modelName]
        if (!model){
            console.log(models);
            console.log(modelName);
            return
        }
        await db.dropCollection(collectionName);
    } catch (err) {
      throw err;
    }
}