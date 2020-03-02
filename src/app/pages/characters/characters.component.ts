import { Component, OnInit } from "@angular/core";
import { Character } from "../../models/character.model";
import { ApiService } from "../../services/api.service";
@Component({
  templateUrl: "./characters.component.html"
})
export class CharactersComponent implements OnInit {
  characters$: Character[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    return this.apiService
      .fetchCharacters()
      .subscribe(response => (this.characters$ = response));
  }
}
