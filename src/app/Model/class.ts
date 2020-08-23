export class Register {
    fullname: String;
    number:String;
  
    roles: String[];
 
}

export class PostAdd{
    postadname:String;
    postadprice:Number;
    postadquant:Number;
    postaddesc:String;
    postadimage:File[];
    roles: String[];

}

export class Login {
    fullname: String;
    number: String;
}

 export class Forgot {
    fullname: String;
    number: String;
   
}

 export class Product {
    name: String;
    sub: String;
    price: Number;
    quant: String;
    desc: String;
    category: String;
    image: File[];
    image1: File[];
    image2: File[];
    image3: File[];
}




    export class AddtoCart {
        productname: String;
        productprice: Number;
       // quantity: Number;
        userId: Number;
       
        productId: Number;
        image: File[];
    }