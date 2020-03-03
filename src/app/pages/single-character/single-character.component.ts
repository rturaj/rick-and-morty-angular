import { Component, OnInit } from "@angular/core";
import { Character } from "src/app/models/character.model";
import { ApiService } from "src/app/services/api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: "./single-character.component.html"
})
export class SingleCharacterComponent implements OnInit {
  character$: Character;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    return this.apiService
      .fetchSingleCharacter(id)
      .subscribe((response: any) => (this.character$ = response));
  }
}
