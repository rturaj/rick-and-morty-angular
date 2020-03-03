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
    this.apiService.setCharactersParams({ status: event.value, page: 1 });
    this.paramsChanged.emit();
  }
  filterGender(event) {
    this.apiService.setCharactersParams({ gender: event.value, page: 1 });
    this.paramsChanged.emit();
  }
}
