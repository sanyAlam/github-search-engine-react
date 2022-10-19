import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const pathaoZoneMap = [
    {
        "cityId": 1,
        "cityName": "Dhaka",
        "zoneAreas": [
            "Banani",
            "Basundhara",
            "Mohakhali",
            "Tejgaon",
            "Gulsan",
            "Nakhalpara",
            "Nikunja"
        ],
        "zoneName": "Banani",
        "zoneId": 1
    },
    {
        "cityId": 1,
        "cityName": "Dhaka",
        "zoneAreas": [
            "Mirpur",
            "Agargaon"
        ],
        "zoneName": "Mirpur",
        "zoneId": 19
    },
    {
        "cityId": 1,
        "cityName": "Dhaka",
        "zoneAreas": [
            "Dhanmondi",
            "Adabor",
            "Mohammadpur",
            "Hazaribag",
            "Lalbag",
            "Kawran Bazar"
        ],
        "zoneName": "Dhanmondi",
        "zoneId": 62
    },
    {
        "cityId": 1,
        "cityName": "Dhaka",
        "zoneAreas": [
            "Uttara",
            "UttarKhan",
            "Dokahn Khan"
        ],
        "zoneName": "Uttara",
        "zoneId": 12
    },
    {
        "cityId": 1,
        "cityName": "Dhaka",
        "zoneAreas": [
            "Motijheel",
            "Puran Dhaka",
            "Jatrabari",
            "Demra"
        ],
        "zoneName": "Motijheel",
        "zoneId": 34
    },
    {
        "cityId": 1,
        "cityName": "Dhaka",
        "zoneAreas": [
            "Badda",
            "Basabo",
            "Rampura",
            "Khilgaon",
            "Harirjil"
        ],
        "zoneName": "Rampura",
        "zoneId": 28
    },
    {
        "cityId": 1,
        "cityName": "Dhaka",
        "zoneAreas": [
            "Savar"
        ],
        "zoneName": "Savar",
        "zoneId": 65
    },
    {
        "cityId": 1,
        "cityName": "Dhaka",
        "zoneAreas": [
            "Keraniganj Sadar"
        ],
        "zoneName": "Keraniganj Sadar",
        "zoneId": 66
    },
    {
        "cityId": 2,
        "cityName": "Chittagong",
        "zoneAreas": [
            "Chittagong"
        ],
        "zoneName": "Chittagong",
        "zoneId": 68
    },
    {
        "cityId": 3,
        "cityName": "Sylhet",
        "zoneAreas": [
            "Sylhet"
        ],
        "zoneName": "Sylhet",
        "zoneId": 89
    },
    {
        "cityId": 4,
        "cityName": "Rajshahi",
        "zoneAreas": [
            "Rajshahi"
        ],
        "zoneName": "Rajshahi",
        "zoneId": 90
    },
    {
        "cityId": 5,
        "cityName": "Cummilla",
        "zoneAreas": [
            "Cummilla"
        ],
        "zoneName": "Cummilla",
        "zoneId": 96
    },
    {
        "cityId": 5,
        "cityName": "Cummilla",
        "zoneAreas": [
            "Hajiganj Sadar"
        ],
        "zoneName": "Hajiganj Sadar",
        "zoneId": 103
    },
    {
        "cityId": 6,
        "cityName": "Feni",
        "zoneAreas": [
            "Feni Sadar"
        ],
        "zoneName": "Feni Sadar",
        "zoneId": 100
    },
    {
        "cityId": 7,
        "cityName": "Noakhali",
        "zoneAreas": [
            "Noakhali Sadar"
        ],
        "zoneName": "Noakhali Sadar",
        "zoneId": 101
    },
    {
        "cityId": 8,
        "cityName": "Chandpur",
        "zoneAreas": [
            "Chandpur Sadar"
        ],
        "zoneName": "Chandpur Sadar",
        "zoneId": 102
    },
    {
        "cityId": 9,
        "cityName": "Bogra",
        "zoneAreas": [
            "Bogra Sadar"
        ],
        "zoneName": "Bogra Sadar",
        "zoneId": 104
    },
    {
        "cityId": 10,
        "cityName": "Sirajganj",
        "zoneAreas": [
            "Sirajganj Sadar"
        ],
        "zoneName": "Sirajganj Sadar",
        "zoneId": 105
    },
    {
        "cityId": 11,
        "cityName": "Cox's bazar",
        "zoneAreas": [
            "Cox's bazar sadar"
        ],
        "zoneName": "Cox's bazar sadar",
        "zoneId": 106
    },
    {
        "cityId": 12,
        "cityName": "Mouluvibazar",
        "zoneAreas": [
            "Mouluvibazar sadar"
        ],
        "zoneName": "Mouluvibazar sadar",
        "zoneId": 107
    },
    {
        "cityId": 13,
        "cityName": "Tangail",
        "zoneAreas": [
            "Tangail Sadar"
        ],
        "zoneName": "Tangail Sadar",
        "zoneId": 109
    },
    {
        "cityId": 14,
        "cityName": "Natore",
        "zoneAreas": [
            "Natore Sadar"
        ],
        "zoneName": "Natore Sadar",
        "zoneId": 110
    },
    {
        "cityId": 15,
        "cityName": "Chapainawabganj",
        "zoneAreas": [
            "Chapainawabganj Sadar"
        ],
        "zoneName": "Chapainawabganj Sadar",
        "zoneId": 111
    },
    {
        "cityId": 16,
        "cityName": "Manikganj",
        "zoneAreas": [
            "Manikganj Sadar"
        ],
        "zoneName": "Manikganj Sadar",
        "zoneId": 112
    },
    {
        "cityId": 17,
        "cityName": "Barishal",
        "zoneAreas": [
            "Barishal Sadar"
        ],
        "zoneName": "Barishal Sadar",
        "zoneId": 113
    },
    {
        "cityId": 18,
        "cityName": "Faridpur",
        "zoneAreas": [
            "Faridpur Sadar"
        ],
        "zoneName": "Faridpur Sadar",
        "zoneId": 114
    },
    {
        "cityId": 19,
        "cityName": "Jashore",
        "zoneAreas": [
            "Jashore sadar"
        ],
        "zoneName": "Jashore sadar",
        "zoneId": 115
    },
    {
        "cityId": 20,
        "cityName": "Khulna",
        "zoneAreas": [
            "Khulna"
        ],
        "zoneName": "Khulna",
        "zoneId": 117
    },
    {
        "cityId": 21,
        "cityName": "Narayanganj",
        "zoneAreas": [
            "Fatulla"
        ],
        "zoneName": "Fatulla",
        "zoneId": 119
    },
    {
        "cityId": 22,
        "cityName": "Gazipur",
        "zoneAreas": [
            "Gazipur"
        ],
        "zoneName": "Gazipur",
        "zoneId": 123
    }
]
