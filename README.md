# Global-Clock

### **What is this?**

An Easy and lightweight package for getting time and date for any location!

### **Installation**

For npm:

`npm install global-clock --save`

For yarn:

`yarn add global-clock`

Then...

For commonjs:

```
const { Clock } = require('global-clock');

Clock.getTime();
```

For module:

```
import { Clock } from 'global-clock';

Clock.getTime();
```

### **Clock**

Clock supports 5 options:

-   `Clock.getTime(<parameters: location>)` - Returns time in the AM/PM format

EX:

    ```
    Clock.getTime() // '5:00:00 PM'
    ```

-   `Clock.getFullTime(<parameters: location>)` - Returns time in military time

EX:

    ```
    Clock.getFullTime() // '17:00:00'
    ```

-   `Clock.getDate(<parameters: type, location>)` - Returns the date

EX:

    ```
    Clock.getDate() // '1/8/2021'
    ```

-   `Clock.getDateTime(<parameters: type, location>)` - Returns the date and the time in the AM/PM format

EX:

    ```
    Clock.getDateTime() // '1/8/2021 5:00:00 PM'
    ```

-   `Clock.getDateFullTime(<parameters: type, location>)` - Returns the date and the time in military time

EX:

    ```
    Clock.getDateTime() // '1/8/2021 17:00:00'
    ```

### **Clock Parameters**

-   `location` _not required_, _not case sensitive_ - Location is the location where you want the time from.

You **CANNOT** put a random location, this only works with `official timezones`, you can get more information about this at: https://www.iana.org/time-zones

If the location is `undefined` the location would automaticly output to your current location

EX:

```
Clock.getTime(location)

Clock.getTime('california') // 5:00:00 PM
```

-   `type` _not required_, _not case sensitive_ - Type is used for dates, this is responsible for the order that the date is in.

    There are 3 different possible values for type:

    -   `mm/dd/yy` or `mm/dd/yyyy`

        Output:

    ```
    Clock.getDate('mm/dd/yy') // 1/8/2021
    Clock.getDate('mm/dd/yyyy') // 1/8/2021
    ```

    -   `dd/mm/yy` or `dd/mm/yyyy`

        Output:

    ```
    Clock.getDate('dd/mm/yy') // 8/1/2021
    Clock.getDate('dd/mm/yyyy') // 8/1/2021
    ```

    -   `yy/mm/dd` or `yyyy/mm/dd`

        Output:

    ```
    Clock.getDate('yy/mm/dd') // 2021/1/8
    Clock.getDate('yyyy/mm/dd') // 2021/1/8
    ```

    If the type is `undefined` the date would automaticly output in this format `mm/dd/yyyy`

EX:

```
Clock.getDate(type)

Clock.getDate('dd/mm/yy') // 8/1/2021
Clock.getDate ('dd/mm/yyyy') // 8/1/2021
```

### **HTMLClock**

**This does not work with pure HTML and JS**

**You would need to use something like Parcel or Webpack**

HTMLClock supports 1 options:

-   `HTMLClock.createClock(<object>)` - This creates a clock element

EX:

```
- JS

import { HTMLClock } from 'global-clock';

const options = {
    class: 'clock',
    type: 'text',
    time: 'normal'
};

HTMLClock.createClock(options);

- HTML

<div class="clock" ></div> <!-- the object that turns into the clock -->

<div class="not-clock" ></div> <!-- NOT the object that turns into the clock -->

- RESULT

<div class="clock" style="display:flex;alignItems:center;justifyContent:center;" >
    <p class="clock-time" style="color:#fff;font-family:arial;font-size:1.5em;font-weight:200;" ><The Time><p>
</div>

<div class="not-clock" ></div>
```

The `<p></p>` tag's class would always be the main class name and-time(in this case `clock-time`)

To overwrite the inline CSS you can use !important

EX:

```
.clock {
    background: #EEFFFF !important;
}

.clock-time {
    color: #000 !important;
    font-size: 20px !important;
}
```

### **HTMLClock Object**

-   `class` - This would be the class that would become the clock element

-   `type` - This is the type of clock element you want

    -   `text` - An invisible `<div></div>` element with a `<p></p>` element that says the time inside of it

    -   `box` - A box with a `<p></p>` element that says the time inside of it

    If you leave blank or `undefined` it will default to `text`

-   `location` - The location that you want the time from

    If you leave blank or `undefined` it will default to your current location

-   `time` - Which type of time do you want

    -   `normal` - Returns time in the AM/PM format

    -   `full` - Returns time in military time

    If you leave blank or `undefined` it will default to `normal`
