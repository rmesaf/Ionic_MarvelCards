import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class MarvelDataProvider {

  apiUrl = "http://gateway.marvel.com/";

  constructor(
    public http: HttpClient
  ) {}

  getData(data, endpoint){
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers.set('Accept', '*/*');
      let params = data;
      this.http.get(this.apiUrl + endpoint, {params: params}).subscribe(res =>{
        resolve(res['data']);
      }, (err) => {
        reject(err);
      });
    });
  }

}
