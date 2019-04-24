import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
// const myjson = {
//   mobile: [
//     { mobId: 1005, mobName: "iPhone", mobPrice: 76661.1 },
//     { mobId: 1002, mobName: "MicroMax", mobPrice: 126661.1 },
//     { mobId: 1003, mobName: "Coolpad", mobPrice: 7823 },
//     { mobId: 1004, mobName: "HTC", mobPrice: 8876 },
//     {
//       mobId: 1010,
//       mobName: "LG",
//       mobPrice: 46661.1
//     }
//   ]
// };

@Injectable({
  providedIn: "root"
})
export class AppService {
  constructor(private http:HttpClient) {}
  url = 'http://localhost:4200';
  
  getMobileList() {
    let url="assets/mobile.json";
    return this.http.get(url);
  }
}
