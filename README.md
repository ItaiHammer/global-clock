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

```js
const { Clock } = require('global-clock');

Clock.getTime();
```

For module:

```js
import { Clock } from 'global-clock';

Clock.getTime();
```

### **Clock**

Clock supports 5 options:

-   `Clock.getTime(<parameters: withSeconds, location>)` - Returns time in the AM/PM format

EX:

```js
Clock.getTime(); // 5:00:00 PM
```

-   `Clock.getFullTime(<parameters: withSeconds, location>)` - Returns time in military time

EX:

```js
Clock.getFullTime(); // 17:00:00
```

-   `Clock.getDate(<parameters: type, location>)` - Returns the date

EX:

```js
Clock.getDate(); // 1/8/2021
```

-   `Clock.getDateTime(<parameters: type, withSeconds, location>)` - Returns the date and the time in the AM/PM format

EX:

```js
Clock.getDateTime(); // 1/8/2021 5:00:00 PM
```

-   `Clock.getDateFullTime(<parameters: type, withSeconds, location>)` - Returns the date and the time in military time

EX:

```js
Clock.getDateFullTime(); // 1/8/2021 17:00:00
```

### **Clock Parameters**

-   `withSeconds` _not required_, _not case sensitive_ - Seconds included?

    There are 2 different possible values for withSeconds:

-   `true` - It would return the time in this format: `5:00:00 PM`

EX:

```js
Clock.getDate(true); // 5:00:00 PM
```

-   `false` - It would return the time in this format: `5:00 PM`

EX:

```js
Clock.getDate(false); // 5:00 PM
```

If the withSeconds is `undefined` time would automaticly output in this format `5:00:00 PM`

-   `location` _not required_, _not case sensitive_ - Location is the location where you want the time from.

You **CANNOT** put a random location, this only works with `official timezones`, you can get more information about this at: https://www.iana.org/time-zones

If the location is `undefined` the location would automaticly output to your current location

EX:

```js
Clock.getTime(location);

Clock.getTime('california'); // 5:00:00 PM
```

-   `type` _not required_, _not case sensitive_ - Type is used for dates, this is responsible for the order that the date is in.

    There are 3 different possible values for type:

-   `mm/dd/yy` or `mm/dd/yyyy`

    Output:

```js
Clock.getDate('mm/dd/yy'); // 1/8/2021
Clock.getDate('mm/dd/yyyy'); // 1/8/2021
```

-   `dd/mm/yy` or `dd/mm/yyyy`

    Output:

```js
Clock.getDate('dd/mm/yy'); // 8/1/2021
Clock.getDate('dd/mm/yyyy'); // 8/1/2021
```

-   `yy/mm/dd` or `yyyy/mm/dd`

    Output:

```js
Clock.getDate('yy/mm/dd'); // 2021/1/8
Clock.getDate('yyyy/mm/dd'); // 2021/1/8
```

You can use both `dd/mm/yy` or `dd/mm/yyyy`

EX:

```js
Clock.getDate(type);

Clock.getDate('dd/mm/yy'); // 8/1/2021
Clock.getDate('dd/mm/yyyy'); // 8/1/2021
```

If the type is `undefined` the date would automaticly output in this format `mm/dd/yyyy`
<br/><br/>
An Example of `global-clock` being used:

https://codesandbox.io/s/global-clock-example-qx4fc?file=/src/App.js
<br/><br/>

### **HTMLClock**

**!** _This does not work with pure HTML and JS_

_You would need to use something like Parcel or Webpack_
<br/><br/>
Parcel: https://parceljs.org/

Webpack: https://webpack.js.org/
<br/><br/>
HTMLClock supports 1 option:

-   `HTMLClock.createClock(<object>)` - This creates a clock element

EX:

```js
// JS

import { HTMLClock } from 'global-clock';

const options = {
    class: 'clock',
    type: 'text',
    time: 'normal',
};

HTMLClock.createClock(options);
```

```html
// HTML

<div class="clock"></div>
<!-- the object that turns into the clock -->

<div class="not-clock"></div>
<!-- NOT the object that turns into the clock -->
```

```html
// RESULT

<div
    class="clock"
    style="display:flex;alignItems:center;justifyContent:center;"
>
    <p
        class="clock-time"
        style="color:#fff;font-family:arial;font-size:1.5em;font-weight:200;"
    >
        The Time
    </p>
</div>

<div class="not-clock"></div>
```

The `<p></p>` tag's class would always be the main class name and-time(in this case `clock-time`)

To overwrite the inline CSS you can use !important

EX:

```css
.clock {
    background: #eeffff !important;
}

.clock-time {
    color: #000 !important;
    font-size: 20px !important;
}
```

### **HTMLClock Object**

-   `class` _required_, _case sensitive_ - This would be the class that would become the clock element

-   `type` _not required_, _case sensitive_ - This is the type of clock element you want

    -   `text` - An invisible `<div></div>` element with a `<p></p>` element that says the time inside of it

    -   `box` - A box with a `<p></p>` element that says the time inside of it

    If you leave blank or `undefined` it will default to `text`

-   `withSecods` _not required_, _not case sensitive_ - Seconds included?

-   `location` _not required_, _not case sensitive_ - The location that you want the time from

    If you leave blank or `undefined` it will default to your current location

-   `time` _not required_, _case sensitive_ - Which type of time do you want

    -   `normal` - Returns time in the AM/PM format

    -   `full` - Returns time in military time

    If you leave blank or `undefined` it will default to `normal`
