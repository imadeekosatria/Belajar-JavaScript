/**
 * Dalam paradigma OOP terdapat 4 pilar utama, yaitu encapsulation, abstraction, inheritance, dan polymorphism.
 */
const mail = {
    from: "pengirim@dicoding.com",
    sendMessage: function (msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
    }
};

//Contoh merubah satu atribut objek
mail.from = "pengirim2@dicoding.com";
//============================================================================//

//Contoh menambahkan fungsi baru pada objek
mail.saveContact = function(addr) {
    console.log(`email saved ${addr}`);
}
//============================================================================//
console.log(mail.from);
mail.sendMessage('apakabar', 'penerima@dicoding.com');
 
/**
output:
pengirim@dicoding.com
you send: apakabar to penerima@dicoding.com from pengirim@dicoding.com
**/
/**
output:
pengirim2@dicoding.com
you send: apakabar to penerima@dicoding.com from pengirim@dicoding.com
**/