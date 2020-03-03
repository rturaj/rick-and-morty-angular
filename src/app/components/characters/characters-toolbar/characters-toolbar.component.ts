import { Component, EventEmitter, Output } from "@angular/core";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "characters-toolbar",
  templateUrl: "./characters-toolbar.component.html",
  styleUrls: ["./characters-toolbar.component.scss"]
})
export class CharactersToolbarComponent {
  constructor(private apiService: ApiService) {}
  @Output()
  paramsChanged = new EventEmitter<string>();

  statuses: Array<{ value: string; name: string }> = [
    { value: "alive", name: "Alive" },
    { value: "dead", name: "Dead" },
    { value: "unknown", name: "unknown" },
    { value: "", name: "All" }
  ];
  genders: Array<{ value: string; name: string }> = [
    { value: "female", name: "Female" },
    { value: "male", name: "Male" },
    { value: "genderless", name: "Genderless" },
    { value: "unknown", name: "unknown" },
    { value: "", name: "All" }
  ];

  filterStatus(event) {
    console.log("filterStatus");

    this.apiService.setCharactersParams({ status: event.value });
    this.paramsChanged.emit();
  }
  filterGender(event) {
    console.log("filterGender");

    this.apiService.setCharactersParams({ gender: event.value });
    this.paramsChanged.emit();
  }
}
