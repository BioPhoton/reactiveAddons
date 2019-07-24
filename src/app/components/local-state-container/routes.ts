import {CreationAndCleanUpContainerComponent} from './creation-and-clean-up/creation-and-clean-up-container.component';
import {EarlyProducerContainerComponent} from './early-producer/early-producer-container.component';
import {FullExampleContainerComponent} from './full-example-container/full-example-container.component';
import {LateSubscribersContainerComponent} from './late-subscribers/late-subscribers-container.component';
import {LocalStateContainerComponent} from './local-state-container.component';
import {NgForContainerComponent} from './ng-for/ng-for-container.component';

export const LOCAL_STATE_ROUTES = [
  {
    path: '',
    component: LocalStateContainerComponent,
    children: [
      {
        path: 'state-clean-up',
        component: CreationAndCleanUpContainerComponent
      },
      {
        path: 'late-subscriber',
        component: LateSubscribersContainerComponent
      },
      {
        path: 'early-producer',
        component: EarlyProducerContainerComponent
      },
      {
        path: 'ng-for',
        component: NgForContainerComponent
      },
      {
        path: 'full-example',
        component: FullExampleContainerComponent
      }
    ]
  }
];
