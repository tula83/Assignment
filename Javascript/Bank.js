class Bank{
    _balance=0;

    constructor(balance){
        this.balance=balance;
    }

    deposit(amount){
         this.balance+=amount;
         
    }
    withdraw(amount){
        this.balance-=amount;
    }
    check(){
        console.log(`Current balance is $ ${this.balance}`)
    }
}

// var b1=new Bank(12);
// b1.deposit(2333);
// b1.withdraw(200);
// b1.check()

class SavingAccount extends Bank{
    
    constructor(balance,rate,time){
        super(balance);
        this.rate=rate;
        this.time=time;
     }

    interest(){
        return (this.balance*this.rate*this.time)/100;
    }
}

var idfc=new SavingAccount(100,7,3);
idfc.deposit(13300)

idfc.withdraw(1000);

idfc.check();

console.log("Interest is $",idfc.interest())