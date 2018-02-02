import { Id, Shop } from "./shop";

export class User {
    id : Id; 
    userName :String;
    email :String;
    passwd : String;
    preferredShops : Shop[];
 }
