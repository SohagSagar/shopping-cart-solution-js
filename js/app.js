
function evenCounter(){
    var evenCounter=0;
    evenCounter++;
    
}

function quantityCounter(isincrease,product){
    
        evenCounter();
        var totalPhonePrice=0;
        var totalCasePrice=0;

        if(product!='null'){
            var InputValue=product+'InputValue';
            var inputQuantity= document.getElementById(InputValue);
        }
        
        // cheaking default quantity negetive value
        if(inputQuantity.value<0){
             document.getElementById(InputValue).value=0;
         }
         
        if(isincrease==true){
            // updating quantity and price for increasing quantity
            var totalQuantity=document.getElementById(InputValue).value=parseInt(inputQuantity.value)+1;

            if(InputValue=='phoneInputValue'){
                totalPhonePrice=document.getElementById('phoneUnitPrice').innerText=parseInt(phoneUnitPrice)*totalQuantity;
            }else if(InputValue=='caseInputValue'){
                totalCasePrice=document.getElementById('caseUnitPrice').innerText=parseInt(caseUnitPrice)*totalQuantity;
            }
        }
        else if(inputQuantity.value>0){
            // updating quantity and price for decreasing quantity
            var inputQuantity= document.getElementById(InputValue);
            var totalQuantity = document.getElementById(InputValue).value=parseInt(inputQuantity.value)-1;
            if(InputValue=='phoneInputValue'){
                totalPhonePrice=document.getElementById('phoneUnitPrice').innerText=parseInt(phoneUnitPrice)*totalQuantity;
            }else if(InputValue=='caseInputValue'){
                document.getElementById('caseUnitPrice').innerText=parseInt(caseUnitPrice)*totalQuantity;
            }
        }
    
        calculateTotal();
}

// phone quantity value updating
document.getElementById('phone-plus').addEventListener('click', function(){
    quantityCounter(true,'phone');
    
})

document.getElementById('phone-minus','').addEventListener('click', function(){
    quantityCounter(false,'phone');
    
})
// case quantity value updating
document.getElementById('case-plus').addEventListener('click', function(){
    quantityCounter(true,'case');
})
document.getElementById('case-minus').addEventListener('click', function(){
    quantityCounter(false,'case');
})
// calculate total phone price
var phoneUnitPrice=parseInt(document.getElementById('phoneUnitPrice').innerText);
var caseUnitPrice=parseInt(document.getElementById('caseUnitPrice').innerText);

// calculate sub total
 
function calculateTotal(){
    var totalPhoneQuantity= parseInt(document.getElementById('phoneInputValue').value);
    var totalcaseQuantity= parseInt(document.getElementById('caseInputValue').value);
    var subTotal= (totalPhoneQuantity*12000)+(totalcaseQuantity*50);
    var totalSubtotal=document.getElementById('subTotal').innerText=subTotal;
    // tax calculation
    var tax=parseFloat(totalSubtotal*0.2);
    var totalTax=document.getElementById('taxAmount').innerText=tax;
    // grand total calculation
    var grandTotal= parseFloat(totalSubtotal)+parseFloat(totalTax);
    var TotalGrandTotal=document.getElementById('grandTotal').innerText=grandTotal;
    
}

    
    
