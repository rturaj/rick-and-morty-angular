import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Info } from "src/app/models/info.model";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "characters-pagination",
  templateUrl: "./characters-pagination.component.html",
  styleUrls: ["./characters-pagination.component.css"]
})
export class CharactersPaginationComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  @Input() info: Info;
  @Output()
  paramsChanged = new EventEmitter<string>();
  paginationHandler(event) {
    this.apiService.setCharactersParams({ page: event.pageIndex + 1 });
    this.paramsChanged.emit();
  }
  ngOnInit(): void {}
}
