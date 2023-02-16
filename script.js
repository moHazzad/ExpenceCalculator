function totalIncome(){
    const totalIncome = document.getElementById('income').value
    const income = parseFloat(totalIncome)
    return income
}

function expenseAmount(){
    const totaincome = totalIncome() 
    const totalExpanseOutput = document.getElementById('totalEx')
    const afterExpanse = document.getElementById('balanceUpdate')
    const foodExpense = document.getElementById('food').value
    const rentExpense = document.getElementById('rent').value
    const clothExpense = document.getElementById('cloth').value
    const calucateExpense = parseFloat(foodExpense) + parseFloat(rentExpense) + parseFloat(clothExpense)

    if(calucateExpense > totaincome){
        const worningMassage = document.getElementById('exValidationMassage')
        worningMassage.innerText = 'tou dont have money to expence'
    }else{
        const remainingBallance = totalIncome() - calucateExpense 
        totalExpanseOutput.innerText = calucateExpense
        afterExpanse.innerText = remainingBallance
    }
    
    
    return remainingBallance;
}

function Percentage(){
    const totalncome = totalIncome()
    const inputPercentage = document.getElementById('percantage').value
    let totalPercentage = (totalncome * parseFloat(inputPercentage)) / 100 

    const savingAmount = document.getElementById('savingAmount')
    savingAmount.innerText = totalPercentage
    return totalPercentage
}




document.getElementById('exSubmit').addEventListener('click',function(){
    
    expenseAmount()

    console.log( expenseAmount());
    // console.log(Percentage());
})
document.getElementById('save').addEventListener('click',function(){
    const totalMoneyLeft = document.getElementById('totalMoneyLeft')
    const remainingAfterExpense = expenseAmount()
    const totalParcentageSave = Percentage()
    const leftMoney = remainingAfterExpense - totalParcentageSave
    totalMoneyLeft.innerText = leftMoney

    console.log(leftMoney);
})