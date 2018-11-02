import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { SafeUrlPipe } from './utils/safe-url.pipe';
import { BoardComponent } from './board/board.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SocketsTestComponent } from './sockets-test/sockets-test.component';
import { SocketsTestService } from './sockets-test.service';
import { MinionSelectorComponent } from './minion-selector/minion-selector.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FunctionalCardSelectorComponent } from './functional-card-selector/functional-card-selector.component';
import { PlayerJoinComponent } from './player-join/player-join.component';
import { HeroSelectorComponent } from './hero-selector/hero-selector.component';

const config: SocketIoConfig = { url: environment.apiUrl, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SafeUrlPipe,
    BoardComponent,
    ErrorPageComponent,
    SocketsTestComponent,
    MinionSelectorComponent,
    FunctionalCardSelectorComponent,
    PlayerJoinComponent,
    HeroSelectorComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [SocketsTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
