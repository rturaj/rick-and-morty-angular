import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Character } from "../models/character.model";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  apiURL = "https://rickandmortyapi.com/api/character/";
  constructor(private http: HttpClient) {}

  fetchCharacters() {
    return this.http.get<Character[]>(this.apiURL);
  }
  fetchSingleCharacter(id) {
    return this.http.get<Character>(this.apiURL + id);
  }
}
