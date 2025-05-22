let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests){
    let cost = 0;
    // Your code here
    guests = parseInt(guests);
    if(50 >= guests){
        cost = 4000;
    }else if(100>=guests){
        cost = 10000;
    }else if(200>=guests){
        cost = 15000;
    }else if(guests > 200){
        cost = 20000;
    }
    return cost;
}

let price = getPrice(guests);
console.log('Your wedding will cost '+price+' dollars');
