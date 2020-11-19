import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { RetryDemoComponent } from './observable/retry-demo/retry-demo.component';
import { DebounceComponent } from './observable/debounce/debounce.component';
import { SubjectDemoComponent } from './observable/subject-demo/subject-demo.component';
import { ReplaySubjectDemoComponent } from './observable/replay-subject-demo/replay-subject-demo.component';
import { AsyncSubjectDemoComponent } from './observable/async-subject-demo/async-subject-demo.component';
import { ConcatDemoComponent } from './observable/concat-demo/concat-demo.component';
import { MergeDemoComponent } from './observable/merge-demo/merge-demo.component';
import { ConcatMapDemoComponent } from './observable/concat-map-demo/concat-map-demo.component';
import { SwitchMapDemoComponent } from './observable/switch-map-demo/switch-map-demo.component';
import { SearchMiniProjComponent } from './observable/search-mini-proj/search-mini-proj.component';
import { ExhaustMapDemoComponent } from './observable/exhaust-map-demo/exhaust-map-demo.component';
import { ShareReplayDemoComponent } from './observable/share-replay-demo/share-replay-demo.component';
import { CombineLatestDemoComponent } from './observable/combine-latest-demo/combine-latest-demo.component';
//import { PluckSComponent } from './observable/pluck/pluck.component';

const routes: Routes = [
  { path: 'promise', component: PromiseComponent },
  {
    path: 'observable',
    component: ObservableComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'fromEvent', component: FromEventComponent },
      { path: 'interval', component: IntervalComponent },
      { path: 'ofFrom', component: OfFromComponent },
      { path: 'toArray', component: ToArrayComponent },
      { path: 'custom', component: CustomComponent },
      { path: 'map', component: MapComponent },
      { path: 'pluck', component: PluckdemoComponent },
      { path: 'filter', component: FilterdemoComponent },
      { path: 'tap', component: TapdemoComponent },
      { path: 'take', component: TakeDemoComponent },
      { path: 'retry', component: RetryDemoComponent },
      { path: 'debounce', component: DebounceComponent },
      { path: 'subject', component: SubjectDemoComponent },
      { path: 'replaySubject', component: ReplaySubjectDemoComponent },
      { path: 'async', component: AsyncSubjectDemoComponent },
      { path: 'concat', component: ConcatDemoComponent },
      { path: 'merge', component: MergeDemoComponent },
      { path: 'concatMap', component: ConcatMapDemoComponent },
      { path: 'switchMap', component: SwitchMapDemoComponent },
      { path: 'searchMini', component: SearchMiniProjComponent },
      { path: 'exhaustMap', component: ExhaustMapDemoComponent },
      { path: 'shareReplay', component: ShareReplayDemoComponent },
      { path: 'combineLatest', component: CombineLatestDemoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
