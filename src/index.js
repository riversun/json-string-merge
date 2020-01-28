const mergeDeeply = require('merge-deeply');

function mergeJson(jsonString1, jsonString2, opts) {

    let _opts = {concatArray: true};
    if (opts) {
        _opts = opts;
    }
    ;

    const jsonResult = JSON.stringify(
        mergeDeeply(JSON.parse(jsonString1), JSON.parse(jsonString2), _opts)
    );
    return jsonResult;

}

module.exports = mergeJson;