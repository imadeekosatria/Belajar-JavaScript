// function Mail() {
//     this.from = 'pengirim@dicoding.com';
// };
 
// Mail.prototype.sendMessage = function n(msg, to) {
//   console.log(`you send: ${msg} to ${to} from ${this.from}`);
// };

// // pemanggilan
 
// const mail1 = new Mail();
// mail1.sendMessage('hallo', 'penerima@dicoding.com');
 
/**
output:
you send: hallo to penerima@dicoding.com from pengirim@dicoding.com
**/

// Cara 2
class Mail {
    constructor() {
        this.from = 'pengirim@dicoding.com';
    }
 
    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
    };
}
 
const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com');
 
/**
output:
you send: hallo to penerima@dicoding.com from pengirim@dicoding.com
**/