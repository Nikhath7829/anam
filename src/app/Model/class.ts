export class Register {
    fullname: string;
    number:string;
    phone:string;
    roles: String[];
}

export class PackageType{
    packageprice:Number;
    packagetotal:Number;
    packagetype:Number;
}

export class Login {
    fullname: string;
    number: string;
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