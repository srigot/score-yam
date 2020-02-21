import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SaisieScoreComponent } from './components/saisie-score/saisie-score.component';
import { GrilleScoreComponent } from './components/grille-score/grille-score.component';
import { ScoreComponent } from './components/score/score.component';
import { FormsModule } from '@angular/forms';
import { UndoButtonComponent } from './components/undo-button/undo-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SaisieScoreComponent,
    GrilleScoreComponent,
    ScoreComponent,
    UndoButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDividerModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
