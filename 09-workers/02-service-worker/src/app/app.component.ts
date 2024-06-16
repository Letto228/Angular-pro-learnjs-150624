import { Component } from '@angular/core';
import { SwPush, SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter, switchMap, tap, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-worker';

  constructor(private readonly swUpdate: SwUpdate, private readonly swPush: SwPush) {
    this.swUpdate.versionUpdates
      .pipe(
        tap(console.log),
        filter((event): event is VersionReadyEvent => event.type === 'VERSION_READY')
      )
      .subscribe(() => {
        if (confirm('Есть новая версия, хотите обновить?')) {
          document.location.reload();
        }
      });

    timer(2 * 60 * 60 * 1000).pipe(
      switchMap(() => this.swUpdate.checkForUpdate())
    ).subscribe(console.log);

    Notification.requestPermission().then(permisitionResult => {
      if (permisitionResult === 'granted') {
        console.log('Can show notification');
      }
    })

    this.swPush.messages.subscribe(console.log);
  }
}

// {
//   "notification": {
//     "title": "Angular pro",
//     "body": "Не забыть выключить утюг",
//     "icon": "http://icon/url",
//     "click_action": "http://navigation-link"
//   }
// }

// { "notification": { "title": "New Notification!", "actions": [{ "action": "foo", "title": "Open new tab" }, { "action": "bar", "title": "Focus last" }, { "action": "baz", "title": "Navigate last" }, { "action": "qux", "title": "Send request in the background" }, { "action": "other", "title": "Just notify existing clients" }], "data": { "onActionClick": { "default": { "operation": "openWindow" }, "foo": { "operation": "openWindow", "url": "/absolute/path" }, "bar": { "operation": "focusLastFocusedOrOpen", "url": "relative/path" }, "baz": { "operation": "navigateLastFocusedOrOpen", "url": "https://other.domain.com/" }, "qux": { "operation": "sendRequest", "url": "https://yet.another.domain.com/" } } } } }