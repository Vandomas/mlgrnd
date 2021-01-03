// Hi!
// Privet!

/*
 *   __  __  _       _____  _____   _   _  _____  
 *  |  \/  || |     / ____||  __ \ | \ | ||  __ \ 
 *  | \  / || |    | |  __ | |__) ||  \| || |  | |
 *  | |\/| || |    | | |_ ||  _  / | . ` || |  | |
 *  | |  | || |____| |__| || | \ \ | |\  || |__| |
 *  |_|  |_||______|\_____||_|  \_\|_| \_||_____/ 
 *  
 *  by Vandomas
 *  
 */


module.exports = function (min, max) {
    if (!String(min).match(/^\d+$/) || !String(max).match(/^\d+$/)) {
        throw new Error('All arguments must be a number!');
    }

    min = Math.ceil(min);
    max = ~~(max);

    const startNumber = Math.floor(Math.random() * 4);
    switch (startNumber) {
        case 0:
            // simple method
            return ~~(min + Math.random() * (max + 1 - min));
        case 1: {
            // average with 10
            let sum = 0;
            for (let i = 0; i < 10; i++) {
                sum = +sum + ~~(min + Math.random() * (max + 1 - min));
            }
            return Math.round(sum / 10);
        }
        case 2: {
            // average with 100
            let sum = 0;
            for (let i = 0; i < 100; i++) {
                sum = +sum + ~~(min + Math.random() * (max + 1 - min));
            }
            return Math.round(sum / 100);
        }
        case 3: {
            // average with 500
            let sum = 0;
            for (let i = 0; i < 500; i++) {
                sum = +sum + ~~(min + Math.random() * (max + 1 - min));
            }
            return Math.round(sum / 500);
        }
        // more coming soon
    }
}