const bseData = require('./BSE');
const dliData = require('./DJI');

var mergeData = {};

mergeData.merge = function(){
    console.log(bseData.length);
    console.log(dliData.length);
    const len = bseData.length;;
    var mergedObj = [];

    for(var i=0; i<len; i++){
        //date
        //High - bse
        //High - dli
        mergedObj.push({
            "date": bseData[i]["date"],
            "High-1": bseData[i]["High"],
            "High-2": dliData[i]["High"]
    });
        //console.log(bseData[i]["date"])
    }
    return mergedObj;
}

module.exports = mergeData;