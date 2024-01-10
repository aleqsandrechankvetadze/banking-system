function deposit() {
    let amount = document.getElementById("AmountOfEneteredMoney").value


if (amount === "") {
    alert("please enter amount of money");
    return;
}

    let currentBalance = parseInt(document.getElementById('balance').innerText);
    let newBalance = currentBalance + parseInt(amount);

    document.getElementById('balance').innerText = newBalance;
    document.getElementById('amount').value = "";
}