import { NgModule } from '@angular/core';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from '../board/board.component';
import { MinionSelectorComponent } from '../minion-selector/minion-selector.component';
import { FunctionalCardSelectorComponent } from '../functional-card-selector/functional-card-selector.component';
import { PlayerJoinComponent } from '../player-join/player-join.component';
import { HeroSelectorComponent } from '../hero-selector/hero-selector.component';

const app_Routes: Routes = [
  { path: '', redirectTo: 'join', pathMatch: 'full'},
  { path: 'board', component: BoardComponent},
  { path: 'minion-selector', component: MinionSelectorComponent},
  { path: 'functional-card-selector', component: FunctionalCardSelectorComponent},
  { path: 'hero-selector', component: HeroSelectorComponent},
  { path: 'not-found', component: ErrorPageComponent},
  { path: 'join', component: PlayerJoinComponent},
  { path: '**', redirectTo: 'not-found' } // this should always be the last route!
  /* { path: '', redirectTo: '/somewhere-else', pathMatch: 'full' }
   * Since the default matching strategy is "prefix",
   *  Angular checks if the path you entered in the URL does start
   *  with the path specified in the route. Of course every path starts with ''.
   * To fix this behavior, you need to change the matching strategy to "full".
   */
];

@NgModule({
  imports: [
      RouterModule.forRoot(app_Routes, {useHash: true})
      // useHash so your web server doesn't resolve the url before the web client(angular)
      // RouterModule.forRoot(app_Routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
