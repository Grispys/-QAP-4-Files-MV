// DESC - QAP 4 Javascript for storing motel customer attributes 
// AUTH - Matthew Verge
// DATE - 15/03/2024


// this is so the html loads first, and then the javascript. there are issues otherwise
document.addEventListener("DOMContentLoaded", function() {
    // store attributes of customer in customer object
    let customer = {
        firstName:'Jerry',
        lastName: 'Carrey',
        bDay: new Date(1996, 0, 1),
        gender: 'Male',
        room_pref: ['Single', 'Double', 'Utopia'],
        payMethod: `Credit`,
        phoneNum: `1-700-800-9000`,
        height: `181 cm`,
        ethnicity: `Caucasian`,
       
        stayRecord: {
            checkIn: new Date(2024, 2, 1),
            checkOut: new Date(2024, 2, 5),
        },

        mailingAdd: {
            postal: `G3F 9L9`,
            road: `10 Avenue Boulevard`,
            city: `Knowhere`,


        }
    }

    // function to determine age
    function ageCalc(birthdate) {
        const bDate = new Date(birthdate)
        const today= new Date();
        let age = today.getFullYear() - bDate.getFullYear();

        return age;
    }

    // function to determine stay duration
    function stayCalc(checkIn, checkOut) {
        const daydivide = 24 * 60 * 60 * 1000; // i believe this should work
        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);
        const durationDays = Math.round(((checkOutDate - checkInDate) / daydivide));
        return durationDays
    }
    // i believe durationDays is being returned as milleseconds, so i'll have to convert those to days - 1000 ms is 1 second, 60 seconds is 1 min, 60 min is 1 hour, 1 day is 24 hours so divide that?
    // IT WORKED - i'm leaving this comments in though as history of this accomplishment
    let html;

    const age = ageCalc(customer.bDay)
    const duration = stayCalc(customer.stayRecord.checkIn, customer.stayRecord.checkOut);
    html = ` Customer Information:
    
    
            <ul>
                <li>First name: ${customer.firstName}</li>
                <li>Last name: ${customer.lastName}</li>
                <li>Age: ${age}</li>
                <li>Birthdate: ${customer.bDay}</li>
                <li>Gender: ${customer.gender}</li>
                <li>Mailing Address: ${customer.mailingAdd.city}, ${customer.mailingAdd.road}, ${customer.mailingAdd.postal}</li>
                <li>Payment Method: ${customer.payMethod}</li>
                <li>Phone Number: ${customer.phoneNum}</li>
                <li>Height: ${customer.height}</li>
                <li>Ethnicity: ${customer.ethnicity}</li>
                <li>Room Preference: ${customer.room_pref[0]}</li>
                <li>Check in date: ${customer.stayRecord.checkIn}</li>
                <li>check out date: ${customer.stayRecord.checkOut}</li>
                <li>Stay Duration: ${duration} days</li>


            </ul>`;


    // this stays at the very bottom at all times maybe
    console.log(html);
    document.body.innerHTML = html;


});
