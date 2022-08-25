import DestinationEntity from '../entities/DestinationEntity';
import GetDestinationsConnectorInterface from "../interfaces/connectors/GetDestinationsConnectorInterface";

export default class GetDestinationsAPIConnector extends GetDestinationsConnectorInterface {
    baseUrl: string;

    constructor() {
        super();

        this.baseUrl = 'http://192.168.5.150:8000/travel-destination/';
    }

    getDestinations(fromTown: string, limit: number) {
        let url = new URL(this.baseUrl + fromTown);
        const params = {'limit': limit.toString()}
        url.search = new URLSearchParams(params).toString()

        return fetch(url)
            .then((response => response.json()))
            .then((responseData) => {
                const destinations = [];
                let destination;
                const data = responseData.data[0];

                for (let i = 0; i < data.length; i += 1) {
                    destination = new DestinationEntity(data[i].from, data[i].to, data[i].time, data[i].distance);
                    destinations.push(destination);
                }
                return destinations;
            });
    }
}
