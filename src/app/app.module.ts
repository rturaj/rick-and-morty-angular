import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
//services
import { ApiService } from "./services/api.service";

//pages
import { SingleCharacterComponent } from "./pages/single-character/single-character.component";
import { CharactersComponent } from "./pages/characters/characters.component";

//custom components
import { AppHeaderComponent } from "./components/general/app-header/app-header.component";
import { CharactersListComponent } from "./components/characters/characters-list/characters-list.component";

//angular material components
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";

const appRoutes: Routes = [
  { path: "characters/:id", component: SingleCharacterComponent },
  { path: "characters", component: CharactersComponent },
  { path: "", redirectTo: "characters", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    SingleCharacterComponent,
    CharactersComponent,
    AppHeaderComponent,
    CharactersListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
