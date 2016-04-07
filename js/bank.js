module.exports = function bank(store) {
    // make an ajax request
    // update the dom
    
    var req = new XMLHttpRequest();
    req.open('GET', 'http://trinkets.queencityiron.com/price');
    req.onload = function() {
        // parse the json and then say what we actually want to
        // do with it. why did we even make the request?
        var data = JSON.parse(req.responseText);
        
        var exchange = document.getElementById('exchange');
        exchange.textContent = Math.round(data.price * 10) / 10;
        
        store(data.price);
    }; //end onload function
    req.send();
}; // end module.exports