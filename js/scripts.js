function BankAccount(person, initDeposit, deposit, withdraw){
  this.person = person;
  this.initDeposit = initDeposit;
  this.deposit = deposit;
  this.withdraw = withdraw;
}

BankAccount.prototype.addOrSubtract = function () {
  return this.initDeposit + this.deposit + this.withdraw
}

// var addtotal = function () {
//   return initDeposit = initDeposit + deposit;
//     console.log(addtotal)
// }
//
// var subtracttotal = function () {
//   return initDeposit = initDeposit - withdraw;
//     console.log(subtracttotal)
// }
//user-interface

$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();

    var person = $("#person").val();
    var initDeposit = parseInt($("#initDeposit").val());
    var deposit = Math.abs($("#deposit").val());
    var withdraw = -Math.abs($("#withdraw").val());

    var newBankAccount = new BankAccount(person, initDeposit, deposit, withdraw);
    console.log(newBankAccount);

    $("ul#total").last().text( newBankAccount.addOrSubtract() )

    // var newNumber = (newBankAccount.addOrSubtract());
    // newNumber = newBankAccount.addOrSubtract();

    $("#person").val("");
    $("#initDeposit").val("");
    $("#deposit").val("");
    $("#withdraw").val("");


  // function totalmoney(initDeposit, deposit, withdraw) {
  //
  //   $("#form").submit(function(event) {
  //     var deposit1 = deposit(start, add);
  //     $("#total").text(deposit1);

    // });
  });
});
