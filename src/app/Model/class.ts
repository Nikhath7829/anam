export class Register {
    fullname: string;
    number:string;
  
    roles: String[];
 
}

export class Packages{
    packageprice:Number;
    packagetotal:Number;
    //packagetype:Number;
    packageId:Number;
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

export class AdsInfo{
    proname:String;
    protitle:String;
    proprice:Number;
    prokgs:Number;
    proimage:File[];
  static ads: AdsInfo[];
}


    export class AddtoCart {
        productname: String;
        productprice: Number;
       // quantity: Number;
        userId: Number;
       
        productId: Number;
        image: File[];
    }