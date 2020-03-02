import { Component, OnInit } from "@angular/core";
import { Character } from "src/app/models/character.model";
import { ApiService } from "src/app/services/api.service";

@Component({
  templateUrl: "./single-character.component.html"
})
export class SingleCharacterComponent implements OnInit {
  character$: Character;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    return this.apiService
      .fetchSingleCharacter(1)
      .subscribe(response => (this.character$ = response));
  }
}
