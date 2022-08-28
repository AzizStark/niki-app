import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Desingation } from 'src/app/interface/designation';

@Injectable({
  providedIn: 'root',
})
export class DesignationService {
  constructor(private http: HttpClient) {}

  apiURL = 'http://localhost:3000/designation';

  getDesignations() {
    return this.http.get<Desingation[]>(this.apiURL);
  }

  addDesignation(designation: Desingation) {
    return this.http.put<Desingation>(this.apiURL, designation);
  }

  deleteDesignation(id: string) {
    return this.http.delete(this.apiURL + "/" + id);
  }
}
