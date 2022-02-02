"use strict";

class nextSession {

    getNextSession() {
        let date = new Date();
        let time = date.getHours() * 100 + date.getMinutes();
        let sessions = data.schedule[date.toDateString().split(" ")[0]];
        for (let i in sessions) {
            if (time < sessions[i].time[0]) {       
                return [sessions[i]["label"], this.convTime(sessions[i]["time"][0]), "today"];
            }
        }
        let isTomorrow = true;
        while (true) {
            date.setDate(date.getDate() + 1);
            time = date.getHours() * 100 + date.getMinutes();
            sessions = data.schedule[date.toDateString().split(" ")[0]];
            if (sessions && sessions.length) { 
                if (!isTomorrow){
                    date = new Intl.DateTimeFormat('en-US', { dateStyle: 'full'}).format(date);
                    return [sessions[0]["label"], this.convTime(sessions[0]["time"][0]), date.slice(0,-6)];
                }
                return [sessions[0]["label"], this.convTime(sessions[0]["time"][0]), "tomorrow"];
            }
            isTomorrow = false;
        }
    }
    
    convTime(time) {
        time = String(time);
        let hour = parseInt(time.slice(0, -2));
        if (hour > 12) {
            return (hour-12 + ":" + time.slice(-2) + " PM");
        }
        return (hour + ":" + time.slice(-2) + " AM");
    }

    get(){
        let nextSession = this.getNextSession();
        return "Next class is <strong>"+nextSession[0]+"</strong> at "+nextSession[1]+" "+nextSession[2]+".";
    }
}
