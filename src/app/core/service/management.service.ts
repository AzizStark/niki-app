import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Management } from 'src/app/interface/management';

@Injectable({
  providedIn: 'root',
})
export class ManagementService {
  constructor(private http: HttpClient) {}

  apiURL = 'http://localhost:3000/manangement';

  getDesignations() {
    return this.http.get<Management[]>(this.apiURL);
  }

  addDesignation(designation: Management) {
    return this.http.put<Management>(this.apiURL, designation);
  }

  deleteDesignation(id: string) {
    return this.http.delete(this.apiURL + '/' + id);
  }
}
