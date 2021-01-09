# Global-Clock

### **What is this?**

Easily get time and date for any location!

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

Global Clock supports 4 options:

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

-   `Clock.getDateTime(<parameters: type, location>)` - Returns the date and the time

    EX:

    ```
    Clock.getDate() // '1/8/2021 5:00:00 PM'
    ```

### **Parameters**

-   `location` _not required_, _not case sensitive_ - Location is the location where you want the time from.

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
