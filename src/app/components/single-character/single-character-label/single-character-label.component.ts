import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "single-character-label",
  templateUrl: "./single-character-label.component.html",
  styleUrls: ["./single-character-label.component.scss"]
})
export class SingleCharacterLabelComponent implements OnInit {
  constructor() {}
  @Input() label: String;

  ngOnInit(): void {}
}
