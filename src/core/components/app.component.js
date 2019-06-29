import { dateHelper } from 'helpers/date.helper';

export class AppComponent {
    constructor() {
        console.log(dateHelper('2019-06-29'));
    }
}
