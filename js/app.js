window.addEventListener('load', function () {
    var bank = require('./bank');
    var makeWallet = require('./wallet');
    var wallet = makeWallet(150);
    
    // duplicated to show coins+trinkets on initial page load.
    var coins = document.getElementById('coin-wealth');
        coins.textContent = Math.round(wallet.coins() * 10) / 10;
    var trinkets = document.getElementById('trinket-wealth');
        trinkets.textContent = wallet.trinkets();
    
    function cashFlow() {
        coins.textContent = Math.round(wallet.coins() * 10) / 10;
        trinkets.textContent = wallet.trinkets();
    };
        
    var buyButton = document.getElementById('buy');
    buyButton.addEventListener('click', function () {
        console.log('clicked buy');
        wallet.buy();
        cashFlow();
    });
    
    var sellButton = document.getElementById('sell');
    sellButton.addEventListener('click', function () {
        console.log('clicked sell');
        wallet.sell();
        cashFlow();
    });
    
    var buyButton2 = document.getElementById('buy2');
    buyButton2.addEventListener('click', function () {
        console.log('clicked buy');
        wallet.buy2();
        cashFlow();
    });
    
    var sellButton2 = document.getElementById('sell2');
    sellButton2.addEventListener('click', function () {
        console.log('clicked sell');
        wallet.sell2();
        cashFlow();
    });
    
//  below is possible because bank.js module's function was given a parameter, instead of
//  simply leaving it blank.
    function store(price) {
        wallet.setPrice(price);
        console.log('the new price is ' + price);
    };
    
    function periodic() {
        bank(store);
    };
    
    window.setInterval(periodic, 3000);
    // or write setInterval only
    
// auto-trade feature start.
    function autoBuySell(price) {
        if (price <= 44.6) {
            wallet.buy();
            cashFlow();
        } else if ( price >= 61.5) {
            wallet.sell();
            cashFlow();
        }
    };

    function autoTrading() {
        bank(autoBuySell);
    };
    
    var autoOn = window.setInterval(autoTrading, 1000);

    var start = document.getElementById('start');
    start.addEventListener('click', function () {
        autoOn = window.setInterval(autoTrading, 1000);
        console.log('auto-trade ON');
        stop.classList.remove('off');
        start.classList.add('on');
    });
    var stop = document.getElementById('stop');
    stop.addEventListener('click', function () {
        console.log('auto-trade OFF');
        window.clearInterval(autoOn);
        start.classList.remove('on');
        stop.classList.add('off');
    });
// auto-trade feature end.    
    

});