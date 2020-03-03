import { Component, OnInit } from "@angular/core";
import { Character } from "../../models/character.model";
import { ApiService } from "../../services/api.service";
import { Info } from "src/app/models/info.model";

@Component({
  templateUrl: "./characters.component.html"
})
export class CharactersComponent implements OnInit {
  characters$: Character[];
  info: Info;

  constructor(private apiService: ApiService) {}

  fetchCharacters() {
    return this.apiService.fetchCharacters().subscribe((response: any) => {
      this.characters$ = response.results;
      this.info = response.info;
    });
  }
  ngOnInit() {
    this.fetchCharacters();
  }
}
