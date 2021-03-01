/*PRIMERO*/
/*Plantillas para hacer muchos productos*/
class Product{

  constructor(plate, brand, color){ /*PROPIEDADES QUE TENDRÁ NUESTRO OBJETO*/
    this.plate = plate;
    this.brand = brand;
    this.color=color;

  }

}



class UI{

  addProduct(product){

    const productList = document.getElementById("product-list");
    const element= document.createElement("div");
    element.innerHTML = `
    <div class ="card tex-center mt-5 mb-4" >
        <div class="card-body">
            <strong> Product plate </strong>: ${product.plate}
            <strong> Product brand </strong>: ${product.brand}
            <strong> Product color </strong>: ${product.color}
        </div>

    </div>
    
    `;
    productList.appendChild(element)
  }

  resetForm(){

    document.getElementById("product-form").reset();
  }


  deleteProduct(){



  }

  showMessage(){


  }
}

document.getElementById("product-form").addEventListener('submit',function(e){
  const plate = document.getElementById("plate").value;
  const brand =document.getElementById("brand").value;
  const color =document.getElementById("color").value;


    const product = new Product(plate, brand, color);

if(plate.length >= 7 ){
  alert("Ese no es numero de matricula.")
return false;
}
  

    const ui =new UI();

    ui.addProduct(product);

    ui.resetForm();

    

e.preventDefault();
 
    
})