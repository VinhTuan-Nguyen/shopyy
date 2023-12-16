import { Routes } from '@angular/router';
import { WebComponent } from './pages/web/web.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: "Shopyy Việt Nam | Mua và Bán Trên Ứng Dụng Di Động Hoặc Website"
    },
    {
        path: 'web',
        component: WebComponent,
        title: "Tải Ngay Shopyy App - Ứng Dụng Mua Sắm Hàng Đầu | Shopyy Việt Nam"
    }
];
