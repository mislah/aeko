/*
 * This file contains the meet codes and the timetable
 * Dictionary element 'link' contains labels and their respective meet code
 * Value of 'time' should be in the format HHMM (24h format, without colon)
 */

data = {
    "link": {
        "CS401": "",
        "CS402": "",
        "CS403": "yzt-mzav-ruh",
        "CS411": "",
        "CS412": "",
        "CS413": "",
        "EC401": "",
        "EC402": ""
    },
    "schedule": {
        "Mon": [
            { "time": [0850, 1100], "label": "CS401" },
            { "time": [1150, 1300], "label": "CS403" },
            { "time": [1350, 1700], "label": "CS411" }
        ],
        "Tue": [
            { "time": [0950, 1050], "label": "CS401" },
            { "time": [1050, 1300], "label": "CS402" },
            { "time": [1350, 1600], "label": "EC401" }
        ],
        "Wed": [
            { "time": [1050, 1150], "label": "EC401" },
            { "time": [1150, 1300], "label": "EC402" },
            { "time": [1450, 1700], "label": "CS403" }
        ],
        "Thu": [
            { "time": [0950, 1300], "label": "CS413" },
            { "time": [1450, 1700], "label": "CS402" }
        ],
        "Fri": [
            { "time": [1050, 1300], "label": "EC402" },
            { "time": [1350, 1700], "label": "CS412" }
        ],
        "Sat": [
            
        ],
        "Sun": [

        ]
    }
};
