export default class GetDestinationsConnectorInterface {
    getDestinations (fromTown: string, limit: number) {
        throw new Error('Not Implemented');
    }

    getSipriDestinations(fromTown: string, townsArray: string[]) {
        throw new Error('Not Implemented');
    }
}
