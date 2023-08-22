// 
exports.operations = async (modelName, action, payload = {}) => {
    const model = require(`../models/${modelName}.model`);

    switch(action) {
        case 'list': 
            return await model.find(payload)
        case 'detail': 
            return await model.findOne(payload.id)
        case 'create': 
            return await model.create(payload)
        case 'update': 
            return await model.findByIdAndUpdate({_id: payload.id}, payload)
        case 'delete': 
            return await model.findByIdAndDelete({_id: payload.id})
        case detault:
            console.log('testing')
    }
}