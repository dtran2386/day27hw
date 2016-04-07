module.exports = function (start) {
       var coins = start;
       var price = 10;
       var trinkets = 0;
       return {
         buy: function () {
             if (coins >= price) {
                 trinkets = trinkets + 1;
                 coins = coins - price;
             }
         },
         sell: function () {
             if (trinkets > 0) {
                 trinkets = trinkets - 1;
                 coins = coins + price;
             }
         },
         buy2: function () {
             if (coins >= price) {
                 trinkets = trinkets + 5;
                 coins = coins - price;
             }
         },
         sell2: function () {
             if (trinkets > 1) {
                 trinkets = trinkets - 5;
                 coins = coins + price;
             }
         },
         setPrice: function (newp) {
             price = newp;
         },
         coins: function () {
           return coins;
         },
         trinkets: function () {
           return trinkets;
         },
       };    
};//end module