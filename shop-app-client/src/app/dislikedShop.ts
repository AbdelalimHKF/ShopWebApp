import { Shop } from "./shop";

export class DislikedShop{

    constructor(date : Date,shop : Shop){
        this.date=date;
        this.shop=shop;
    }
    date : Date;
    shop : Shop
}