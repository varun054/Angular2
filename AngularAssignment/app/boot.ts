import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './Module/app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
