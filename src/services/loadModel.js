const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    return tf.loadGraphModel('https://storage.googleapis.com/mlstorage123/model-in-prod/model.json');
}
module.exports = loadModel;