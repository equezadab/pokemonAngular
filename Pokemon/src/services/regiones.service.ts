import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRegiones } from 'src/models/iregiones';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionesService {

  constructor(private http:HttpClient) { }

  public post(region:IRegiones){  
    const endpoint:string = 'https://6o87otg5k8.execute-api.us-east-1.amazonaws.com/dev/post'
    const body = JSON.stringify(region)
    return this.http.post(endpoint,body)
  }

}
