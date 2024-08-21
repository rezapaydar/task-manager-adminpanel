import {Injectable} from "@angular/core";
import * as jalaali from 'jalaali-js';
import moment from "jalali-moment";


@Injectable({
  providedIn:'root'
})

export class TimeService{
 
  convertMiladiToShamsi(date: string): string {
    // Assuming date is in 'YYYY-MM-DD' format
    const parts = date.split('-').map(part => parseInt(part, 10));
    const jalaaliDate = jalaali.toJalaali(parts[0], parts[1], parts[2]);
    return `${jalaaliDate.jy}-${jalaaliDate.jm}-${jalaaliDate.jd}`;
  }
  convertMiladiToShamsiWithTime(dateTime: string): string {
    // Format Jalali date and time
    return moment(dateTime).locale('fa').format('YYYY/MM/DD HH:mm:ss');

  }
  converter(date:string){
    console.log(date)
    let miladiDate = new Date(date);
    let jalaaliDate = jalaali.toJalaali(miladiDate.getUTCFullYear(), miladiDate.getUTCMonth() + 1, miladiDate.getUTCDate());

    let hours = miladiDate.getUTCHours();
    let minutes = miladiDate.getUTCMinutes();
    let seconds = miladiDate.getUTCSeconds();

    return(jalaaliDate.jy + '/' + jalaaliDate.jm + '/' + jalaaliDate.jd + ' ' + hours + ':' + minutes + ':' + seconds);
  }

}
