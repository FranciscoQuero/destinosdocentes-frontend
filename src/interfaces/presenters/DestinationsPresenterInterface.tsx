import DestinationEntity from "../../entities/DestinationEntity";

export default class DestinationsPresenterInterface {
    getDestinationsData (destinations: Array<DestinationEntity>) {
        throw new Error('Not Implemented');
    }
}
