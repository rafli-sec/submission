const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    return tf.loadGraphModel('https://storage.googleapis.com/data-train-ml/model.json');
}
module.exports = loadModel;
