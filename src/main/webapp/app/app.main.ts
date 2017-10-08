import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProdConfig } from './blocks/config/prod.config';
import { 3ScaleWebhookApplicationAppModule } from './app.module';

ProdConfig();

if (module['hot']) {
    module['hot'].accept();
}

platformBrowserDynamic().bootstrapModule(3ScaleWebhookApplicationAppModule)
.then((success) => console.log(`Application started`))
.catch((err) => console.error(err));
