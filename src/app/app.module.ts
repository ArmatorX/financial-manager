import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ExpensesManagerRoutingModule } from './modules/expenses-manager/expenses-manager-routing.module';
import { AuthenticationRoutingModule } from './modules/authentication/authentication-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), 
    // Routings
    AppRoutingModule,
    ExpensesManagerRoutingModule,
    AuthenticationRoutingModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
