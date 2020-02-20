import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrilleScoreComponent } from './components/grille-score/grille-score.component';


const routes: Routes = [
  { path: 'score', component: GrilleScoreComponent },
  { path: '', redirectTo: '/score', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
