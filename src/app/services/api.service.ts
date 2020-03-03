import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Character } from "../models/character.model";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  apiURL = "https://rickandmortyapi.com/api/character/";
  charactersParams = new HttpParams({
    fromObject: {
      page: "1"
    }
  });
  constructor(private http: HttpClient) {}

  fetchCharacters() {
    return this.http.get<Character[]>(this.apiURL, {
      params: this.charactersParams
    });
  }
  fetchSingleCharacter(id) {
    return this.http.get<Character>(this.apiURL + id);
  }
  setCharactersParams(params) {
    Object.keys(params).forEach(key => {
      this.charactersParams = this.charactersParams.set(key, params[key]);
    });
  }
  getCurrentPage() {
    return Number(this.charactersParams.get("page"));
  }
}
