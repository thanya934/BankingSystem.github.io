let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

let popup = document.getElementById("popup");

function openPopup() {
    var enterName = document.getElementById("enterName").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);

   if (enterAmount > 30000) {
      alert("Insufficient Balance.")
   } else {
      var findUserBankAccount = enterName + "BankBalance";
      var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
      var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount
      document.getElementById("myAccountBalance").innerText = myAccountBalance
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;
      alert(`Successful Transaction !!  
      $${enterAmount} is sent to ${enterName}@gmail.com.`)
   }
   // transaction history 
   var createPTag = document.createElement("li");
   var textNode = document.createTextNode(`$${enterAmount} is sent to recepient with Email-id ${enterName}@email.com on ${Date()}.`);
   createPTag.appendChild(textNode);
   var element = document.getElementById("transaction-history-body");
   element.insertBefore(createPTag, element.firstChild);
}
function closePopup() {
    popup.classList.remove("open-popup");
}

function addHtmlTableRow()
{
   var table = document.getElementById("table");
   newRow = table.insertRow(table.length);
   cell1 = newRow.insertCell(0);
   cell2 = newRow.insertCell(1);
   cell3 = newRow.insertCell(2);
   cell4 = newRow.insertCell(3);
   Id = document.getElementById("Id").value;
   Name = document.getElementById("Name").value;
   Email = document.getElementById("Email").value;
   Balance = document.getElementById("Balance").value;

   cell1.innerHTML = Id;
   cell2.innerHTML = Name;
   cell3.innerHTML = Email;
   cell4.innerHTML = Balance;
}

function selectedRowToInput()
{
   var rIndex, table = document.getElementById("table");
   for(var i=1; i<table.rows.length; i++)
   {
      table.rows[i].onclick = function()
      {
         rIndex = this.rowIndex;
         console.log(rIndex);
      };
   }
}
selectedRowToInput();


