var K = function () {
    var a = navigator.userAgent;
    return {
        ie: a.match(/MSIE\s([^;]*)/)
    }
}();

var util = {};
util.convert_time = function(dt) {
    var pdt = Date.parse(dt);
    
    if (K.ie) {
        pdt = Date.parse(dt.replace(/( \+)/, ' UTC$1'))
    }
    
    var rdt= (arguments.length > 1) ? arguments[1] : new Date();
    var cdt = parseInt((rdt.getTime() - pdt ) / 1000);

    if (cdt < 60) {
        return '방금';
    } else if (cdt < 120) {
        return '1분전';
    } else if (cdt < (60*60)) {
        return (parseInt(cdt / 60)).toString() + '분전';
    } else if (cdt < (120*60)) {
        return '한시간전';
    } else if (cdt < (24*60*60)) {
        return (parseInt(cdt / 3600)).toString() + '시간전';
    } else if (cdt < (48*60*60)) {
        return '하루전';
    } else {
        return (parseInt(cdt / 86400)).toString() + '일전';
    }
};
