let Clock = {
    getFullTime,
    getTime,
    getDate,
    getDateTime,
};

function getFullTime(location) {
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
            let d = new Date();
            const day = d.getDate();
            const month = d.getMonth() === 0 ? 1 : d.getMonth();
            const year = d.getFullYear();

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
            const date = `${month}/${day}/${year}`;

            const timeDate = `${date} ${time}`;

            return timeDate;
        } else if (
            type.toLowerCase() === 'mm/dd/yy' ||
            type.toLowerCase() === 'mm/dd/yyyy'
        ) {
            let d = new Date();
            const day = d.getDate();
            const month = d.getMonth() === 0 ? 1 : d.getMonth();
            const year = d.getFullYear();

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
            const date = `${month}/${day}/${year}`;

            const timeDate = `${date} ${time}`;
        } else if (
            type.toLowerCase() === 'dd/mm/yy' ||
            type.toLowerCase() === 'dd/mm/yyyy'
        ) {
            let d = new Date();
            const day = d.getDate();
            const month = d.getMonth() === 0 ? 1 : d.getMonth();
            const year = d.getFullYear();

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
            const date = `${day}/${month}/${year}`;

            const timeDate = `${date} ${time}`;

            return timeDate;
        } else if (
            type.toLowerCase() === 'yy/mm/dd' ||
            type.toLowerCase() === 'yyyy/mm/dd'
        ) {
            let d = new Date();
            const day = d.getDate();
            const month = d.getMonth() === 0 ? 1 : d.getMonth();
            const year = d.getFullYear();

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
            const date = `${year}/${month}/${day}`;

            const timeDate = `${date} ${time}`;

            return timeDate;
        }
    } else {
        if (type === undefined) {
            const d = new Date().toLocaleString('en-US', {
                timeZone: location,
            });
            const time = d.substr(d.indexOf(' ') + 1, d.length);
            const date = d.substr(0, d.indexOf(','));

            const timeDate = `${date} ${time}`;

            return timeDate;
        } else if (
            type.toLowerCase() === 'mm/dd/yy' ||
            type.toLowerCase() === 'mm/dd/yyyy'
        ) {
            const d = new Date().toLocaleString('en-US', {
                timeZone: location,
            });
            const time = d.substr(d.indexOf(' ') + 1, d.length);
            const date = d.substr(0, d.indexOf(','));

            const timeDate = `${date} ${time}`;

            return timeDate;
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
            const time = d.substr(d.indexOf(' ') + 1, d.length);
            const date = `${day}/${month}/${year}`;

            const timeDate = `${date} ${time}`;

            return timeDate;
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
            const time = d.substr(d.indexOf(' ') + 1, d.length);
            const date = `${year}/${month}/${day}`;

            const timeDate = `${date} ${time}`;

            return timeDate;
        }
    }
}

console.log(getDateTime('dd/mm/yy', 'israel'));

export { Clock };
