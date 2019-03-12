# Eventful!

Eventful! is a portfolio project based on the Eventbrite website, built using Ruby on Rails, React, and Postgresql. 

[Link To Live Website](https://eventfullapp.herokuapp.com)

Click "Log In" and "Demo Login" to test the website immediately!

---
## Features

* User creation and authentication
  * Demo login included. Click the "Demo Login" button on the [login page](https://eventfullapp.herokuapp.com/#/login) to get started quickly!
  * Friendly error messages to help make the sign up and log in process seamless.

* Event creation
  * Promote your event through unique event pages. Showcase your event with pictures and a custom description.
  * Google Map integration.
  * Automatic conversion to Pacific Time, with support for daylight savings time. 

* Ticketing, event discovery, and saved events coming soon!

---
## Screenshots 

To view project screenshots, please [click here](https://www.dropbox.com/sh/uw31quyfvmlsd2w/AABgQ8fqR5WI-cLvcsyCYeUBa?dl=0).

---
## Sample Code

Custom code to convert event start and end time to Pacific Time 
```js
 getTimeZoneOffset(date) {
    const now = new Date(date);
    let offset = now.getTimezoneOffset();
    const sign = offset > 0 ? "-" : "+";
    offset = Math.abs(offset);
    const offsetHours = Math.floor(offset/60) < 10 ? "0" + Math.floor(offset/60) : Math.floor(offset/60);
    const offsetMin = offset%60 < 10 ? "0" + offset%60 : offset%60;
    return "GMT" + sign + offsetHours + ":" + offsetMin;
  }
 ```
 
---
## Additional Information

[George Wang on LinkedIn](https://www.linkedin.com/in/guanw88)

[George Wang on Github](https://github.com/guanw88)
