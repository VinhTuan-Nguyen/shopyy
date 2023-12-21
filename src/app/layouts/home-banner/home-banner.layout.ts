import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { component_Carousel } from '../../components/carousel/carousel.component';
import { component_Hotdeal } from '../../components/hotdeal/hotdeal.component';
import { component_Distinction } from '../../components/distinction/distinction.component';
import { iDistinction } from '../../interfaces/distinction.interface';
import { iHotDeal } from '../../interfaces/hotdeal.interface';

@Component({
  selector: 'layout_homebanner',
  standalone: true,
  imports: [
    CommonModule,
    component_Carousel,
    component_Hotdeal,
    component_Distinction
  ],
  templateUrl: './home-banner.layout.html',
  styleUrl: './home-banner.layout.css'
})

export class layout_HomeBanner {
  Hotdeal: iHotDeal[] = [
    {
      url: "",
      srcImg: "https://cf.shopee.vn/file/vn-50009109-b5532dea8eb451c47ae8a14ef030774a_xhdpi"
    },
    {
      url: "",
      srcImg: "https://cf.shopee.vn/file/vn-50009109-f8dcbf1dd38c841d56a21f5869fa01d5_xhdpi"
    }
  ]

  Distinctions: iDistinction[] = [
    {
      url: "/m/mien-phi-van-chuyen",
      description: "Miễn Phí Ship - Có Shopee",
      imgUrl: "https://cf.shopee.vn/file/vn-50009109-c7a2e1ae720f9704f92f72c9ef1a494a_xhdpi"
    },
    {
      url: "/m/VoucherXtra",
      description: "Voucher Giảm Đến 500.000Đ",
      imgUrl: "https://cf.shopee.vn/file/vn-50009109-f6c34d719c3e4d33857371458e7a7059_xhdpi"
    },
    {
      url: "/m/shopee-sieu-re",
      description: "Shopee Siêu Rẻ",
      imgUrl: "https://cf.shopee.vn/file/vn-50009109-91399a1d3ed283d272b069fac5ca989c_xhdpi"
    },
    {
      url: "/m/ma-giam-gia",
      description: "Mã Giảm Giá",
      imgUrl: "https://cf.shopee.vn/file/vn-50009109-8a387d78a7ad954ec489d3ef9abd60b4_xhdpi"
    },
    {
      url: "/m/shopee-outlet",
      description: "Hàng Hiệu Outlet Giảm 50%",
      imgUrl: "https://cf.shopee.vn/file/vn-50009109-852300c407c5e79bf5dc1854aa0cfeef_xhdpi"
    },
    {
      url: "/digitalproduct",
      description: "Nạp Thẻ, Dịch Vụ & Data",
      imgUrl: "https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi"
    },
    {
      url: "/m/shopeesogiday",
      description: "Nhận Free Voucher 30.000Đ",
      imgUrl: "https://cf.shopee.vn/file/vn-50009109-fbc98cb6dcc514259ff797e1b63c5937_xhdpi"
    },
    {
      url: "/sandealquocte",
      description: "Hàng Quốc Tế",
      imgUrl: "https://cf.shopee.vn/file/a08ab28962514a626195ef0415411585_xhdpi"
    },
    {
      url: "/m/top-deal-hot-trend",
      description: "Bắt Trend - Giá Sốc",
      imgUrl: "https://cf.shopee.vn/file/vn-50009109-1975fb1af4ae3c22878d04f6f440b6f9_xhdpi"
    }
  ]
}