import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { SafeUrlPipe } from './utils/safe-url.pipe';
import { BoardComponent } from './board/board.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SocketsTestComponent } from './sockets-test/sockets-test.component';
import { SocketsTestService } from './sockets-test.service';

const config: SocketIoConfig = { url: environment.apiUrl, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SafeUrlPipe,
    BoardComponent,
    ErrorPageComponent,
    SocketsTestComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [SocketsTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
