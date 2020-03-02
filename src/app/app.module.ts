import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SingleCharacterComponent } from "./pages/single-character/single-character.component";
import { CharactersComponent } from "./pages/characters/characters.component";

import { AppComponent } from "./app.component";

const appRoutes: Routes = [
  { path: "characters/:id", component: SingleCharacterComponent },
  { path: "characters", component: CharactersComponent }
];

@NgModule({
  declarations: [AppComponent, SingleCharacterComponent, CharactersComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
