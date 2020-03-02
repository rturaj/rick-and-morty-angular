import { Component } from "@angular/core";
import { AppHeaderComponent } from "./components/general/app-header/app-header.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "rick-and-morty-angular";
}
