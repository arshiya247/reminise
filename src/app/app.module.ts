import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomComponent } from './observable/custom/custom.component';
import { MapComponent } from './observable/map/map.component';
import { PluckdemoComponent } from './observable/pluckdemo/pluckdemo.component';
import { FilterdemoComponent } from './observable/filterdemo/filterdemo.component';
import { TapdemoComponent } from './observable/tapdemo/tapdemo.component';
import { TakeDemoComponent } from './observable/take-demo/take-demo.component';
import { HttpClientModule } from '@angular/common/http';
import { RetryDemoComponent } from './observable/retry-demo/retry-demo.component';
import { DebounceComponent } from './observable/debounce/debounce.component';
import { SubjectComponent } from './observable/subject/subject.component';
//import { PluckSComponent } from './observable/pluck/pluck.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    ObservableComponent,
    ListComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomComponent,
    MapComponent,
    PluckdemoComponent,
    FilterdemoComponent,
    TapdemoComponent,
    TakeDemoComponent,
    RetryDemoComponent,
    DebounceComponent,
    SubjectComponent
    //PluckSComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
