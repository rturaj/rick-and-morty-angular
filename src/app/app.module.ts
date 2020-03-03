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
import { CharactersToolbarComponent } from "./components/characters/characters-toolbar/characters-toolbar.component";
import { CharactersPaginationComponent } from "./components/characters/characters-pagination/characters-pagination.component";

//angular material components
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatPaginatorModule } from "@angular/material/paginator";
import { SingleCharacterPhotoComponent } from './components/single-character/single-character-photo/single-character-photo.component';
import { SingleCharacterLabelComponent } from './components/single-character/single-character-label/single-character-label.component';
import { SingleCharacterDetailsComponent } from './components/single-character/single-character-details/single-character-details.component';

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
    CharactersListComponent,
    CharactersToolbarComponent,
    CharactersPaginationComponent,
    SingleCharacterPhotoComponent,
    SingleCharacterLabelComponent,
    SingleCharacterDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule,
    MatPaginatorModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
