import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "single-character-photo",
  templateUrl: "./single-character-photo.component.html",
  styleUrls: ["./single-character-photo.component.scss"]
})
export class SingleCharacterPhotoComponent implements OnInit {
  constructor() {}
  @Input() photo: String;
  ngOnInit(): void {}
}
