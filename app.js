function add() {
    var sku = document.getElementById("product_sku").value;
    var name = document.getElementById("product_name").value;
    var price = document.getElementById("product_price").value;
    var quantity = document.getElementById("product_quantity").value;


    if(sku == ""){
        document.getElementById("product_sku").classList.add("error")
    }else  if(name == ""){
        document.getElementById("product_sku").classList.remove("error")
        document.getElementById("product_name").classList.add("error")
    }else  if(price == ""){
        document.getElementById("product_sku").classList.remove("error")
        document.getElementById("product_name").classList.remove("error")
        document.getElementById("product_price").classList.add("error")
        
    }else  if(quantity == ""){
        document.getElementById("product_sku").classList.remove("error")
        document.getElementById("product_name").classList.remove("error")
        document.getElementById("product_price").classList.remove("error")
        document.getElementById("product_quantity").classList.add("error")
        
    }else{
        document.getElementById("product_name").classList.remove("error")
        document.getElementById("product_price").classList.remove("error")
        document.getElementById("product_sku").classList.remove("error")
        document.getElementById("product_quantity").classList.remove("error")
        alert("added details successfuly")
    }
}