import DestinationEntity from "../entities/DestinationEntity";
import DestinationsPresenterInterface from "../interfaces/presenters/DestinationsPresenterInterface";


export default class DestinationsPresenter extends DestinationsPresenterInterface {

    getDestinationsData(destinations: Array<DestinationEntity>) {
        const rows = [];
        let currentData = {}
        let currentTime: string, currentDistance: string;

        for (let i = 0; i < destinations.length; i += 1) {
            currentTime = this._calculateTimeInHoursAndMinutes(destinations[i].time);
            currentDistance = this._calculateKmWithTwoDecimals(destinations[i].distance);
            currentData = {
                'id': i + 1, 'from': destinations[i].from, 'to': destinations[i].to, 'state': destinations[i].state,
                'time': currentTime, 'distance': currentDistance
            };

            rows.push(currentData);
        }
        return rows;

    }

    _calculateTimeInHoursAndMinutes = (time: number) => {
        const hours = Math.floor(time / 60 / 60);
        const minutes = Math.floor(time / 60) - (hours * 60);
        let hoursText = ''
        if (hours > 0)
            hoursText = hours.toString() + ' h ';

        return hoursText + minutes.toString() + ' min';
    }

    _calculateKmWithTwoDecimals = (distance: number) => {
        const km = distance / 1000;
        return km.toFixed(1).toString() + ' km';
    }
}
