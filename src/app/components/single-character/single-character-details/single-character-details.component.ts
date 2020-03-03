import { Component, OnInit, Input } from "@angular/core";
import { Character } from "src/app/models/character.model";

@Component({
  selector: "single-character-details",
  templateUrl: "./single-character-details.component.html",
  styleUrls: ["./single-character-details.component.scss"]
})
export class SingleCharacterDetailsComponent implements OnInit {
  constructor() {}
  @Input() character: Character;

  ngOnInit(): void {}
}
