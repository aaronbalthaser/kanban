import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from 'environments/environment';
import { AppComponent } from './app.component';
import { RoutingModule } from './app.routes';

/* Module Dependencies */
import { AuthModule } from './modules/auth';

/* Services */
import { TransmitService } from './shared/services/transmit';
import { UtilsService } from './shared/services/utils';

/* Store */
import { Store } from './store';

import '../styles/styles.scss';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RoutingModule,

    AuthModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    environment.ENV_PROVIDERS,

    Store,
    TransmitService,
    UtilsService
  ],
  bootstrap: [ AppComponent ],
})

export class AppModule {}
