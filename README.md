# Global-Clock

### **What is this?**

Easily get time from anywhere!

### **Installation**

`npm install global-clock --save`

Then...

For commonjs:

```
const { Clock } = require('global-clock');

Clock.getTime(parameters)
```

For module:

```
import { Clock } from 'global-clock';

Clock.getTime(parameters)
```

### **Options**

Global Clock supports 3 options:

-   `Clock.getTime(<parameters: location>)` - Returns time with AM/PM

    EX:

    ```
    Clock.getTime() // '5:00:00 PM'
    ```

-   `Clock.getFullTime(<parameters: location>)` - Returns full time

    EX:

    ```
    Clock.getFullTime() // '17:00:00'
    ```

-   `Clock.getDate(<parameters: type, location>)` - Returns full time

    EX:

    ```
    Clock.getDate() // '1/8/2021'
    ```

### **Parameters**

-   `location` _not required_, _not case sensitive_ - Location is the location where you want the time from.

    EX:

```
Clock.getTime('california') // 5:00:00 PM
```

-   `type` _not required_, _not case sensitive_ - Type is used for dates, this is responsible for the order that the date is in.

    EX:

```
Clock.getDate('dd/mm/yy') // 8/1/2020
```
