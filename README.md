# global-time

### **What is this?**

Easily get time from anywhere!

### **Installation**

`npm install global-clock --save`

Then...

For commonjs:

```
const { Time } = require('global-clock');

Time.getTime(parameters)
```

For module:

```
import { Time } from 'global-clock';

Time.getTime(parameters)
```

### **Options**

Global Clock supports 2 options:

-   `Time.getTime(parameters)` - Returns time with AM/PM EX: _5:00:00 PM_
-   `Time.getFullTime(parameters)` - Returns full time EX: _17:00:00_

### **Parameters**

-   `location` _not required_ - Location is the location where you want the time from.
