import { Routes } from '@angular/router';
import { page_Web } from './pages/web/web.page';
import { page_Home } from './pages/home/home.page';

export const routes: Routes = [
    {
        path: '',
        component: page_Home,
        title: "Shopyy Việt Nam | Mua và Bán Trên Ứng Dụng Di Động Hoặc Website"
    },
    {
        path: 'web',
        component: page_Web,
        title: "Tải Ngay Shopyy App - Ứng Dụng Mua Sắm Hàng Đầu | Shopyy Việt Nam"
    }
];
