import { Id, Shop } from "./shop";
import { DislikedShop } from "./dislikedShop";

export class User {
    id : Id; 
    userName :String;
    email :String;
    passwd : String;
    preferredShops : Shop[];
    dislikedShops : DislikedShop[];
 }
