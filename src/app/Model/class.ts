export class Register {
    fullname: string;
    number:string;
    photo:string;
    roles: String[];
}

export class Login {
    fullname: string;
    number: string;
}
 export class ForgotPassword{
     number:string;
 }
 

 export class Product {
    name: String;
    sub: String;
    price: Number;
    quant: String;
    desc: String;
    category: String;
    image: File[];
}

    export class AddtoCart {
        productname: String;
        productprice: Number;
       // quantity: Number;
        userId: Number;
       
        productId: Number;
        image: File[];
    }