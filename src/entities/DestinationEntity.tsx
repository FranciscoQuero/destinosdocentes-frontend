export default class DestinationEntity {
    from: string;
    to: string;
    state: string;
    time: number;
    distance: number;

    constructor(from: string, to: string, state: string, time: number, distance: number) {
        this.from = from;
        this.to = to;
        this.state = state;
        this.time = time;
        this.distance = distance;
    }
}