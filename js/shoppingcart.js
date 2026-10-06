// abstraction : 
 // add , remove , get totals , view (history) , store 
// decompose the problem : functions we need for application 
// data modelling  : storage data type .
// pattern recogintion : modularize // helper functions -- Single Responsibility Principle 
// (intro -- nested functions )

// ----------------

// assignment , sequence , selection 
function shoppingCart(){
    // logic body
    const cart = [] // reference to shopping cart : assignment  

    // add to cart 
    function addItem(name, price, quantity = 1){
        // operation to add items to cart 
        // how to add items to an array. --- 
        const item = {
            name,price,quantity
        }
        cart.push(item)
    }
    // remove from cart 
    function removeItem(name){
        // array operation to remove item from cart 
        // remove specific item from an array
        // 1. Get the correct object /product 
        // 2.  Splice to remove object at its index 
        // product represents a single object in my array of objects 
        // .find loops an array and returns the element based off the criteria 
        const item_to_be_removed = cart.find(product => {
          // {name,price , quantity}
          return product.name === name  // returned as the product {}
        })  
        // validation in functions 
        if(!item_to_be_removed){
              console.log("Item not found")
              return; // early return :: if item is not found then exit function
        }
        //get the index position of matched item 
        // splice method to remove item 
        const index = cart.indexOf(item_to_be_removed)
        cart.splice(index,1)

    }

    //reducing the quantity 
    function reduceQuantity(name){
        const item_to_be_reduced = cart.find(product => {
          // {name,price , quantity}
          return product.name === name  // returned as the product {}
        }) 
        if(item_to_be_reduced){
            item_to_be_reduced.quantity--;  // reducees by 1 : reduces by multiplies ?? 
               // validation 
        // if quantity reaches 0 then remove item 
            if(item_to_be_reduced.quantity === 0){
                 removeItem(name)  // if 0 remove item 
            }
        }
    }

    // function to filter : search item in cart  // 
    // function searchCart(){

    // }

    // get total 
    function getTotal(){
        // .reduce to single total 
        // return cart.reduce((total,product) => {
        //     return total + product.price * product.quantity
        // }, 0)

        return cart.reduce((total,product) => 
             total + product.price * product.quantity, 0)
    }

    // view the cart 
    function viewCart(){
        console.log(cart);
        const totalPrice = getTotal()
        console.log("Total : KES " + totalPrice )

    }

    return {
         addItem,
         removeItem,
         reduceQuantity,
         getTotal,
         viewCart
    }

}

//usage 
const finalCart = shoppingCart() 
// addItem 
finalCart.addItem("MousePad", 1000, 3)
finalCart.addItem("Keyboard", 3000, 3)
// reduce quantity 
finalCart.reduceQuantity("MousePad")
finalCart.removeItem("Keyboard")
finalCart.getTotal()
finalCart.viewCart()
