export class Tracking {
    id: number;
    datetime: string;
    alt: string;
    lat: string;
    long: string;
    address: string;
    left: number;
    constructor(id: number,
                datetime: string,
                alt: string,
                lat: string,
                long: string,
                address: string,
                left: number) {
        this.id = id;
        this.datetime = datetime;
        this.alt = alt;
        this.lat = lat;
        this.long = long;
        this.address = address;
        this.left = left;
    }
}