/*
 * This file contains the meet codes and the schedule
 * Dictionary element 'link' contains labels and their respective meet codes
 * Value of 'time' is in the format HHMM (24h format, without colon)
 */

data = {
    "link": {
        "CS401": "usk-fscq-nkv",
        "CS402": "gec-xhsk-jjp",
        "CS403": "yzt-mzav-ruh",
        "CS411": "knc-szrc-cxn",
        "CS412": "mro-tdkm-gzj",
        "CS413": "iqf-knkk-ogr",
        "EC401": "xss-btcc-jcc",
        "EC402": "eyr-gqsm-qmj"
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
            { "time": [950, 1050], "label": "EC402" },
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
