let Time = {
    getFullTime,
    getTime,
};

async function getFullTime(location) {
    if (location === undefined) {
        let d = new Date();
        let hour = d.getHours();
        const minutes = d.getMinutes();
        const seconds = d.getSeconds();

        const time = `${hour}:${minutes}:${seconds} ${sufix}`;

        return time;
    } else {
        let d = new Date().toLocaleString('en-US', { timeZone: location });
        const time = d.substr(d.indexOf(' ') + 1, d.length);

        return time;
    }
}

async function getTime(location) {
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

module.exports.Time = Time;
