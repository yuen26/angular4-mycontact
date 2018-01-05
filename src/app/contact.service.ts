import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';


import { Contact } from './contact';


@Injectable()
export class ContactService {
  private api: string = "/api/contact/";

  constructor(private http: Http) { }

  listContact() {
  	return this.http.get(this.api)
  		.map((response: Response) => response.json());
  }
  
  searchContact(term) {
  	return this.http.get(this.api + "search?term=" + term)
  		.map((response: Response) => response.json());
  }

  getContact(id) {
  	return this.http.get(this.api + id)
  		.map((response: Response) => response.json());
  }

  saveContact(contact) {
  	return this.http.post(this.api + "save", contact)
      .map((response: Response) => response.json());
  }

  deleteContact(id) {
  	this.http.delete(this.api + "delete/" + id);
  }
}