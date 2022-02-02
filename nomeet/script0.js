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
        let h = parseInt(time.slice(0, -2));
        let p = " AM";
        if (h > 12) {
            h -= 12;
            p = " PM";
        }
        return (h + ":" + time.slice(-2) + p);
    }

    get(){
        let ret = this.getNextSession();
        return "Next class is <strong>"+ret[0]+"</strong> at "+ret[1]+" "+ret[2]+".";
    }
}
