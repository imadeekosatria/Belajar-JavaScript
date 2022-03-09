//================ Overriding Constructor =================
class WhatsApp extends Mail {
    constructor(username, isBussinessAccount, phone) {
        super(phone);
        this.username = username;
        this.isBussinessAccount = isBussinessAccount;
    }

    //================ Overriding Method =================
    // Overriding method => Melakukan Override Total
    sendMessage(msg, to) {
        super.sendMessage(msg, to);
        console.log('Send by WA');
    }
}

const wa1 = new WhatsApp('dicoding', true, 089989090898);

// Catatan:

// super(...) digunakan untuk memanggil constructor parent dan hanya dapat digunakan di constructor.

// super.methodName(...) digunakan untuk memanggil parent method.