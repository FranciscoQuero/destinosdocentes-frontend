import DestinationEntity from '../entities/DestinationEntity';
import GetDestinationsConnectorInterface from "../interfaces/connectors/GetDestinationsConnectorInterface";

export default class GetDestinationsAPIConnector extends GetDestinationsConnectorInterface {
    baseUrl: string;

    constructor() {
        super();

        this.baseUrl = 'http://destinosdocentes.ddns.net:8000/';
    }

    getDestinations(fromTown: string, limit: number) {
        const resourceUrl = 'travel-destination/';
        let url = new URL(this.baseUrl + resourceUrl + fromTown);
        const params = {'limit': limit.toString()}
        url.search = new URLSearchParams(params).toString()

        return this._doRequest(url);
    }

    getSipriDestinations(fromTown: string, townsArray: string[]) {
        const resourceUrl = '';
        let url = new URL(this.baseUrl + resourceUrl + fromTown);
        const params = {'destinations': townsArray.toString()}
        url.search = new URLSearchParams(params).toString()

        return this._doRequest(url);
    }

    _doRequest(url: URL) {
        return fetch(url)
            .then((response => response.json()))
            .then((responseData) => {
                const destinations = [];
                let destination;
                const data = responseData.data[0];

                for (let i = 0; i < data.length; i += 1) {
                    destination = new DestinationEntity(data[i].from, data[i].to, data[i].state,
                        data[i].time, data[i].distance);
                    destinations.push(destination);
                }
                return destinations;
            });
    }
}
