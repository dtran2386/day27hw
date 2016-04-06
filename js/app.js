window.addEventListener('load', function () {
    var updatePrice = require('./bank');
    var makeWallet = require('./wallet');
    
    var wallet = makeWallet(150);
    var coins = document.getElementById('coin-wealth');
    var trinkets = document.getElementById('trinket-wealth');
    trinkets.textContent = wallet.trinkets();
    coins.textContent = wallet.coins();
    
    var buyButton = document.getElementById('buy');
    buyButton.addEventListener('click', function () {
        console.log('clicked buy');
        wallet.buy();
        coins.textContent = wallet.coins();
        trinkets.textContent = wallet.trinkets();
    });
    
    var sellButton = document.getElementById('sell');
    sellButton.addEventListener('click', function () {
        console.log('clicked sell');
        wallet.sell();
        trinkets.textContent = wallet.trinkets();
        coins.textContent = wallet.coins();
    });
    
    function store(price) {
        wallet.setPrice(price);
        console.log('the new price is ' + price);
    };
    
    function periodic() { // example of what can be setInterval'd
//        console.log('updating trinket prices');
        updatePrice(store);
    };
    
//    updatePrice(store);
    setInterval(periodic, 3000);
    // or write window.setInterval   

});