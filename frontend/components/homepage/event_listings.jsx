import React from 'react';
import { Link } from 'react-router-dom';
import EventListing from './event_listing';

class EventListings extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   events: [
    //     {
    //       id: 1,
    //       date: "2019-01-01",
    //       eventName: "New Year's Party at App Academy",
    //       startTime: "13:00",
    //       endTime: "19:00",
    //       address: "123 Main Street",
    //       city: "San Francisco",
    //       state: "CA",
    //       zip: "12345",
    //       numTicketsAvailable: 100,
    //       description: "Join us at App Academy to celebrate the New Year!",
    //       imageUrl: "http://test.com/image.png",
    //       privateEventYN: true,
    //       categories: ["Concert", "Free"]
    //     },
    //     {
    //       id: 2,
    //       date: "2019-01-02",
    //       eventName: "Next Event",
    //       startTime: "13:00",
    //       endTime: "19:00",
    //       address: "123 Main Street",
    //       city: "San Francisco",
    //       state: "CA",
    //       zip: "12345",
    //       numTicketsAvailable: 100,
    //       description: "Join us at App Academy to celebrate the New Year!",
    //       imageUrl: "http://test.com/image.png",
    //       privateEventYN: true,
    //       categories: ["Concert", "Free"]
    //     },
    //     {
    //       id: 3,
    //       date: "2019-01-02",
    //       eventName: "Event 3",
    //       startTime: "13:00",
    //       endTime: "19:00",
    //       address: "123 Main Street",
    //       city: "San Francisco",
    //       state: "CA",
    //       zip: "12345",
    //       numTicketsAvailable: 100,
    //       description: "Join us at App Academy to celebrate the New Year!",
    //       imageUrl: "http://test.com/image.png",
    //       privateEventYN: true,
    //       categories: ["Concert", "Free"]
    //     },
    //     {
    //       id: 4,
    //       date: "2019-01-02",
    //       eventName: "Event 4 Super Long Name Legitimatewordthatisextremelylong",
    //       startTime: "13:00",
    //       endTime: "19:00",
    //       address: "123 Main Street",
    //       city: "San Francisco",
    //       state: "CA",
    //       zip: "12345",
    //       numTicketsAvailable: 100,
    //       description: "Join us at App Academy to celebrate the New Year!",
    //       imageUrl: "http://test.com/image.png",
    //       privateEventYN: true,
    //       categories: ["Concert", "Free"]
    //     },
    //     {
    //       id: 5,
    //       date: "2019-01-02",
    //       eventName: "Weird characters(*&(*&(*()*&(!*@$)*&)))",
    //       startTime: "13:00",
    //       endTime: "19:00",
    //       address: "123 Main Street",
    //       city: "San Francisco",
    //       state: "CA",
    //       zip: "12345",
    //       numTicketsAvailable: 100,
    //       description: "Join us at App Academy to celebrate the New Year!",
    //       imageUrl: "http://test.com/image.png",
    //       privateEventYN: true,
    //       categories: ["Concert", "Free"]
    //     },
    //     {
    //       id: 6,
    //       date: "2019-01-02",
    //       eventName: "Short Name",
    //       startTime: "13:00",
    //       endTime: "19:00",
    //       address: "123 Main Street",
    //       city: "San Francisco",
    //       state: "CA",
    //       zip: "12345",
    //       numTicketsAvailable: 100,
    //       description: "Join us at App Academy to celebrate the New Year!",
    //       imageUrl: "http://test.com/image.png",
    //       privateEventYN: true,
    //       categories: ["Concert", "Free"]
    //     }
    //   ]
    // };

  }

  render() {
    const events = Object.values(this.props.events).map( event => {
      return (
        <EventListing
            key={event.id}
            event={event}
        />
      );
    });

    return (
      <div className="eventGridContainer">
        <p>{this.props.text}</p>
        <ul className="eventGrid">
          {events}
        </ul>
      </div>
    );
  }


}

export default EventListings;
