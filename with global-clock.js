//*With global-clock

import { Clock } from 'global-clock';

Clock.getTime(); // returns '5:00:00 PM'

Clock.getFullTime(); // returns '17:00:00'

//*Without global-clock

const d = new Date();

let hours = d.getHours();
const minutes =
    d.getMinutes().length === 2 ? d.getMinutes() : `0${d.getMinutes()}`;
const seconds =
    d.getSeconds().length === 2 ? d.getSeconds() : `0${d.getSeconds()}`;
let sufix = 'AM';

if (hours > 12) {
    hours = hours - 12;
    sufix = 'PM';
}

const time = `${hours}:${minutes}:${seconds} ${sufix}`; // returns '5:00:00 PM'

const fullHours = d.getHours();
const fullMinutes = d.getMinutes();
const fullSeconds = d.getSeconds();

const fullTime = `${fullHours}:${fullMinutes}:${fullSeconds}`; // returns '17:00:00'
