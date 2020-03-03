import { Component, Input } from "@angular/core";
import { Character } from "src/app/models/character.model";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "characters-list",
  templateUrl: "./characters-list.component.html",
  styleUrls: ["./characters-list.component.scss"]
})
export class CharactersListComponent {
  @Input() characters: Character[];
  displayedColumns: string[] = [
    "index",
    "name",
    "status",
    "species",
    "gender",
    "actions"
  ];
  get page() {
    return this.apiService.getCurrentPage();
  }
  constructor(private apiService: ApiService) {}
}
