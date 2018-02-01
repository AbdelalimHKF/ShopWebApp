import { Shop } from "../shop";

export class NearByshops{

    averageDistance :AverageDistance ;
    content : Content[];
}

export class AverageDistance {

}

export class Content{
    content : Shop;
    distance : Distnace;

}

export class Distnace{
    value: number;
    metric: String;
}