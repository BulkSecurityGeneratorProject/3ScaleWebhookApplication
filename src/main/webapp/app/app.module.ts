import './vendor.ts';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { 3ScaleWebhookApplicationSharedModule, UserRouteAccessService } from './shared';
import { 3ScaleWebhookApplicationHomeModule } from './home/home.module';
import { 3ScaleWebhookApplicationAdminModule } from './admin/admin.module';
import { 3ScaleWebhookApplicationAccountModule } from './account/account.module';
import { 3ScaleWebhookApplicationEntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        3ScaleWebhookApplicationSharedModule,
        3ScaleWebhookApplicationHomeModule,
        3ScaleWebhookApplicationAdminModule,
        3ScaleWebhookApplicationAccountModule,
        3ScaleWebhookApplicationEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class 3ScaleWebhookApplicationAppModule {}
