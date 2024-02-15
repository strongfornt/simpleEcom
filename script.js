let card = document.querySelectorAll('.card');
let countTitle = 1 ;
let sumPrice = 0 ;
for(let i = 0 ; i < card.length; i++){
    const cards = card[i];
    
   cards.addEventListener('click',function(){
    //find elements
    const titleContainer = document.getElementById('title-container');
    const p = document.createElement('p');
    const totalPrice = document.getElementById('totalPrice')
    const itemPrice = cards.querySelector('span')
    const itemPriceText = parseFloat(itemPrice.innerText.slice(1));
    //set title and price on the right corner board-------------
     totalPrice.innerText = sumPrice += itemPriceText;
    const h3 = cards.querySelector('h3');
     const h3Text = h3.innerText;
     p.innerText =countTitle + "." + h3Text  ;
     titleContainer.appendChild(p);
     countTitle ++; 
    
     
   }) 
}

//set coupon related bonus
const btn = document.getElementById('apply-btn')
btn.addEventListener('click',function(){
    //get input value
    const inputField = document.getElementById('input-field').value;
    const inputFieldValue = inputField.split(" ").join('').toUpperCase();
    // conditional check
    if(sumPrice >=200){
        if( inputFieldValue === 'SELL200'){
            const discount = document.getElementById('discountPrice');
            const total = document.getElementById('total');
            const discountPrice = sumPrice * 0.2;
            discount.innerText = discountPrice.toFixed(2);
            total.innerText = sumPrice - discountPrice;
            document.getElementById('input-field').value =""
            
        }else{
            alert('invalid Coupon')
            document.getElementById('input-field').value =""
        }
    }else{
        alert('Please purchase at least $200 for get a discount');
        document.getElementById('input-field').value ="";
    }
})

