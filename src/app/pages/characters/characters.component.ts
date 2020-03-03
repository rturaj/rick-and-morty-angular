import { Component, OnInit } from "@angular/core";
import { Character } from "../../models/character.model";
import { ApiService } from "../../services/api.service";
import { CharactersListComponent } from "../../components/characters/characters-list/characters-list.component";

@Component({
  templateUrl: "./characters.component.html",
})
export class CharactersComponent implements OnInit {
  characters$: Character[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    return this.apiService
      .fetchCharacters()
      .subscribe((response: any) => (this.characters$ = response.results));
  }
}
