# Seat code

Reserve a vehicle by visualizing the location of the vehicle and the customer on a map.

### Instructions

***Customer booking***

- Select the vehicle on the map to obtain vehicle information, availability and distance from the customer.


- If the selected vehicle is available, you can make the reservation by clicking on the **Book** button, and then it will show you a form that you must fill in with the customer's information. Once reserved, the vehicle would become unavailable.

***Management***

- The vehicle catalog can be managed, adding, deleting or updating the information of the available vehicles.


- To add a new vehicle, press the blue button with the + icon to the right of the search engine. A modal will open with the form to fill out. Fill in all the required fields and save the form.


- To update the available information, click on the Edit button and modify the form data.


- To delete, you have to press the red icon, you will be presented with a confirmation to complete the deletion of the selected vehicle.

***Manage Reservations***

The information of the reservations made can be displayed in a table. To get more details of the reservation, you have to press the **Details** button that is on the right of each row.

***
### Stack

- Angular 16
- Angular Material 16
- Google Maps
- Akita State Management
- RxJs
- JSONServer

### Running instructions
Make sure node js 16 or higher and npm are installed in the running environment.

Open your command line, go into the project directory and run the following

    npm install
    npm run serve:json-server

Navigate to [http://localhost:4200](http://localhost:4200) to launch the project and [http://localhost:3000](http://localhost:3000) to launch JSON Server main page

To run the tests, execute

    npm run test


### TODO

1. Complete unit and end-to-end testing
