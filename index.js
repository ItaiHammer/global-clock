//*Clock

const Clock = {
    getFullTime,
    getTime,
    getDate,
    getDateTime,
    getDateFullTime,
};

function getFullTime(location) {
    if (location === undefined) {
        let d = new Date();
        let hour =
            String(d.getHours()).length === 1
                ? `0${d.getHours()}`
                : d.getHours();
        const minutes =
            String(d.getMinutes()).length === 1
                ? `0${d.getMinutes()}`
                : d.getMinutes();
        const seconds =
            String(d.getSeconds()).length === 1
                ? `0${d.getSeconds()}`
                : d.getSeconds();

        const time = `${hour}:${minutes}:${seconds}`;

        return time;
    } else {
        let d = new Date().toLocaleString('en-US', { timeZone: location });
        let time = d.substr(d.indexOf(' ') + 1, d.length - 10);
        time = time.substr(0, time.length - 3);

        return time;
    }
}

function getTime(location) {
    if (location === undefined) {
        let d = new Date();
        let hour =
            String(d.getHours()).length === 1
                ? `0${d.getHours()}`
                : d.getHours();
        const minutes =
            String(d.getMinutes()).length === 1
                ? `0${d.getMinutes()}`
                : d.getMinutes();
        const seconds =
            String(d.getSeconds()).length === 1
                ? `0${d.getSeconds()}`
                : d.getSeconds();

        let sufix = 'AM';
        if (hour > 12) {
            hour = hour - 12;
            sufix = 'PM';
        }

        const time = `${hour}:${minutes}:${seconds} ${sufix}`;

        return time;
    } else {
        let d = new Date().toLocaleString('en-US', { timeZone: location });
        const time = d.substr(d.indexOf(' ') + 1, d.length);

        return time;
    }
}

function getDate(type, location) {
    if (location === undefined) {
        if (type === undefined) {
            let d = new Date();
            const day = d.getDate();
            const month = d.getMonth() === 0 ? 1 : d.getMonth();
            const year = d.getFullYear();
            const time = `${month}/${day}/${year}`;

            return time;
        } else if (
            type.toLowerCase() === 'mm/dd/yy' ||
            type.toLowerCase() === 'mm/dd/yyyy'
        ) {
            let d = new Date();
            const day = d.getDate();
            const month = d.getMonth() === 0 ? 1 : d.getMonth();
            const year = d.getFullYear();
            const time = `${month}/${day}/${year}`;

            return time;
        } else if (
            type.toLowerCase() === 'dd/mm/yy' ||
            type.toLowerCase() === 'dd/mm/yyyy'
        ) {
            let d = new Date();
            const day = d.getDate();
            const month = d.getMonth() === 0 ? 1 : d.getMonth();
            const year = d.getFullYear();
            const time = `${day}/${month}/${year}`;

            return time;
        } else if (
            type.toLowerCase() === 'yy/mm/dd' ||
            type.toLowerCase() === 'yyyy/mm/dd'
        ) {
            let d = new Date();
            const day = d.getDate();
            const month = d.getMonth() === 0 ? 1 : d.getMonth();
            const year = d.getFullYear();
            const time = `${year}/${month}/${day}`;

            return time;
        }
    } else {
        if (type === undefined) {
            const d = new Date().toLocaleString('en-US', {
                timeZone: location,
            });
            const time = d.substr(0, d.indexOf(','));

            return time;
        } else if (
            type.toLowerCase() === 'mm/dd/yy' ||
            type.toLowerCase() === 'mm/dd/yyyy'
        ) {
            const d = new Date().toLocaleString('en-US', {
                timeZone: location,
            });
            const time = d.substr(0, d.indexOf(','));

            return time;
        } else if (
            type.toLowerCase() === 'dd/mm/yy' ||
            type.toLowerCase() === 'dd/mm/yyyy'
        ) {
            const d = new Date().toLocaleString('en-US', {
                timeZone: location,
            });
            const month = d.substr(0, d.indexOf('/'));
            const day = d.substr(
                d.indexOf('/') + 1,
                d.indexOf('/', d.indexOf('/') + 1) - 2,
            );
            const year = d.substr(
                d.indexOf('/', d.indexOf('/') + 1) + 1,
                d.indexOf(',') - 4,
            );
            const time = `${day}/${month}/${year}`;

            return time;
        } else if (
            type.toLowerCase() === 'yy/mm/dd' ||
            type.toLowerCase() === 'yyyy/mm/dd'
        ) {
            const d = new Date().toLocaleString('en-US', {
                timeZone: location,
            });
            const month = d.substr(0, d.indexOf('/'));
            const day = d.substr(
                d.indexOf('/') + 1,
                d.indexOf('/', d.indexOf('/') + 1) - 2,
            );
            const year = d.substr(
                d.indexOf('/', d.indexOf('/') + 1) + 1,
                d.indexOf(',') - 4,
            );
            const time = `${year}/${month}/${day}`;

            return time;
        }
    }
}

function getDateTime(type, location) {
    if (location === undefined) {
        if (type === undefined) {
            return `${getDate()} ${getTime()}`;
        } else if (
            type.toLowerCase() === 'mm/dd/yy' ||
            type.toLowerCase() === 'mm/dd/yyyy'
        ) {
            return `${getDate(type.toLowerCase())} ${getTime()}`;
        } else if (
            type.toLowerCase() === 'dd/mm/yy' ||
            type.toLowerCase() === 'dd/mm/yyyy'
        ) {
            return `${getDate(type.toLowerCase())} ${getTime()}`;
        } else if (
            type.toLowerCase() === 'yy/mm/dd' ||
            type.toLowerCase() === 'yyyy/mm/dd'
        ) {
            return `${getDate(type.toLowerCase())} ${getTime()}`;
        }
    } else {
        if (type === undefined) {
            return `${getDate('mm/dd/yy', location)} ${getTime(location)}`;
        } else if (
            type.toLowerCase() === 'mm/dd/yy' ||
            type.toLowerCase() === 'mm/dd/yyyy'
        ) {
            return `${getDate(type.toLowerCase(), location)} ${getTime(
                location,
            )}`;
        } else if (
            type.toLowerCase() === 'dd/mm/yy' ||
            type.toLowerCase() === 'dd/mm/yyyy'
        ) {
            return `${getDate(type.toLowerCase(), location)} ${getTime(
                location,
            )}`;
        } else if (
            type.toLowerCase() === 'yy/mm/dd' ||
            type.toLowerCase() === 'yyyy/mm/dd'
        ) {
            return `${getDate(type.toLowerCase(), location)} ${getTime(
                location,
            )}`;
        }
    }
}

function getDateFullTime(type, location) {
    if (location === undefined) {
        if (type === undefined) {
            return `${getDate()} ${getFullTime()}`;
        } else if (
            type.toLowerCase() === 'mm/dd/yy' ||
            type.toLowerCase() === 'mm/dd/yyyy'
        ) {
            return `${getDate(type.toLowerCase())} ${getFullTime()}`;
        } else if (
            type.toLowerCase() === 'dd/mm/yy' ||
            type.toLowerCase() === 'dd/mm/yyyy'
        ) {
            return `${getDate(type.toLowerCase())} ${getFullTime()}`;
        } else if (
            type.toLowerCase() === 'yy/mm/dd' ||
            type.toLowerCase() === 'yyyy/mm/dd'
        ) {
            return `${getDate(type.toLowerCase())} ${getFullTime()}`;
        }
    } else {
        if (type === undefined) {
            return `${getDate('mm/dd/yy', location)} ${getFullTime(location)}`;
        } else if (
            type.toLowerCase() === 'mm/dd/yy' ||
            type.toLowerCase() === 'mm/dd/yyyy'
        ) {
            return `${getDate(type.toLowerCase(), location)} ${getFullTime(
                location,
            )}`;
        } else if (
            type.toLowerCase() === 'dd/mm/yy' ||
            type.toLowerCase() === 'dd/mm/yyyy'
        ) {
            return `${getDate(type.toLowerCase(), location)} ${getFullTime(
                location,
            )}`;
        } else if (
            type.toLowerCase() === 'yy/mm/dd' ||
            type.toLowerCase() === 'yyyy/mm/dd'
        ) {
            return `${getDate(type.toLowerCase(), location)} ${getFullTime(
                location,
            )}`;
        }
    }
}

//*HTMLClock
const HTMLClock = {
    createClock,
};

let HTMLClocks = [];

function createClock(options) {
    HTMLClocks.push(options);

    setClock();
}

function setClock() {
    if (HTMLClocks[0] != null) {
        HTMLClocks.forEach((options) => {
            const elements = document.querySelectorAll(`.${options.class}`);

            const className = options.class;
            const type = options.type;
            const location = options.location;
            const time = options.time;

            delete options.class;
            delete options.location;
            delete options.type;

            if (type == null) {
                elements.forEach((element) => {
                    element.style.display = 'flex';
                    element.style.alignItems = 'center';
                    element.style.justifyContent = 'center';

                    const timeElement = document.createElement('div');
                    timeElement.classList.add(`${className}-time`);

                    if (time === 'full') {
                        timeElement.innerHTML = getFullTime(location);
                    } else {
                        timeElement.innerHTML = getTime(location);
                    }

                    timeElement.style.color = '#fff';
                    timeElement.style.fontFamily = 'arial';
                    timeElement.style.fontSize = '1.5em';
                    timeElement.style.fontWeight = '200';

                    element.append(timeElement);

                    setInterval(() => {
                        if (time === 'full') {
                            timeElement.innerHTML = getFullTime(location);
                        } else {
                            timeElement.innerHTML = getTime(location);
                        }
                    }, 1000);
                });
            } else if (type === 'text') {
                elements.forEach((element) => {
                    element.style.display = 'flex';
                    element.style.alignItems = 'center';
                    element.style.justifyContent = 'center';

                    const timeElement = document.createElement('div');
                    timeElement.classList.add(`${className}-time`);

                    if (time === 'full') {
                        timeElement.innerHTML = getFullTime(location);
                    } else {
                        timeElement.innerHTML = getTime(location);
                    }

                    timeElement.style.color = '#fff';
                    timeElement.style.fontFamily = 'arial';
                    timeElement.style.fontSize = '1.5em';
                    timeElement.style.fontWeight = '200';

                    element.append(timeElement);

                    setInterval(() => {
                        if (time === 'full') {
                            timeElement.innerHTML = getFullTime(location);
                        } else {
                            timeElement.innerHTML = getTime(location);
                        }
                    }, 1000);
                });
            } else if (type === 'box') {
                elements.forEach((element) => {
                    element.style.display = 'flex';
                    element.style.alignItems = 'center';
                    element.style.justifyContent = 'center';

                    //box style
                    element.style.height = '3em';
                    element.style.width = '9em';
                    element.style.background = '#212121';
                    element.style.borderRadius = '5px';

                    const timeElement = document.createElement('div');
                    timeElement.classList.add(`${className}-time`);

                    if (time === 'full') {
                        timeElement.innerHTML = getFullTime(location);
                    } else {
                        timeElement.innerHTML = getTime(location);
                    }

                    timeElement.style.color = '#fff';
                    timeElement.style.fontFamily = 'arial';
                    timeElement.style.fontSize = '1.5em';
                    timeElement.style.fontWeight = '200';

                    element.append(timeElement);

                    setInterval(() => {
                        if (time === 'full') {
                            timeElement.innerHTML = getFullTime(location);
                        } else {
                            timeElement.innerHTML = getTime(location);
                        }
                    }, 1000);
                });
            }
        });
    }
}

export { Clock, HTMLClock };
