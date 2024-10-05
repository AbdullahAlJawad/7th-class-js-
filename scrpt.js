let balance=1000;
function showmenu(){
console.log("\n Welcome to banking system")
console.log("1. Check Balance")
console.log("2. Deposite Money")
console.log("3. Withdraw Money")
console.log("4. Exit")
}
//start the banking system program
function bankingsystem(){
let choice;
do{
    showmenu();//function call
    choice= parseInt(prompt("Enter your choice(1-4): "))

    switch(choice){
        case 1:
          console.log("Your balance is $:" + balance);
        case 2:
                let depositeamount=parseInt(prompt("enter amount to deposite:"));
          if(depositeamount>0) {
            balance +=depositeamount;
            console.log("$" + depositeamount +" has been deposited. New balance:$" + balance);
           }
          else{
            console.log("Invalid amount. Please try again");
           }
           break;
    }
}while(choice!==4);

}







bankingsystem();