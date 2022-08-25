export default class DestinationEntity {
    from: string;
    to: string;
    time: number;
    distance: number;

    constructor(from: string, to: string, time: number, distance: number) {
        this.from = from;
        this.to = to;
        this.time = time;
        this.distance = distance;
    }
}