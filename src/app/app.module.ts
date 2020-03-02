import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";

//pages
import { SingleCharacterComponent } from "./pages/single-character/single-character.component";
import { CharactersComponent } from "./pages/characters/characters.component";

//custom components
import { AppHeaderComponent } from "./components/general/app-header/app-header.component";

//angular material components
import { MatCardModule } from "@angular/material/card";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const appRoutes: Routes = [
  { path: "characters/:id", component: SingleCharacterComponent },
  { path: "characters", component: CharactersComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SingleCharacterComponent,
    CharactersComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
