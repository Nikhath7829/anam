import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ' ' ,
    redirectTo: '/login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  
  {
    path: 'register', 
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  
  
  {
    path: 'admindashboard',
    loadChildren: () => import('./admindashboard/admindashboard.module').then( m => m.AdmindashboardPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },
  
  {
    path: 'forgot',
    loadChildren: () => import('./forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'addpro',
    loadChildren: () => import('./addpro/addpro.module').then( m => m.AddproPageModule)
  },
  {
    path: 'registeruser',
    loadChildren: () => import('./registeruser/registeruser.module').then( m => m.RegisteruserPageModule)
  },
  
  
  // {
  //   path: 'datatable',
  //   loadChildren: () => import('./datatable/datatable.module').then( m => m.DatatablePageModule)
  // },
  {
    path: 'userprofile',
    loadChildren: () => import('./userprofile/userprofile.module').then( m => m.UserprofilePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./language/language.module').then( m => m.LanguagePageModule)
  },
  {
    path: 'package',
    loadChildren: () => import('./package/package.module').then( m => m.PackagePageModule)
  },
  {
    path: 'offerings',
    loadChildren: () => import('./offerings/offerings.module').then( m => m.OfferingsPageModule)
  },
  
  {
    path: 'finaledit',
    loadChildren: () => import('./finaledit/finaledit.module').then( m => m.FinaleditPageModule)
  },
  {
    path: 'product-detail/:id',
    loadChildren: () => import('./product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'surat',
    loadChildren: () => import('./surat/surat.module').then( m => m.SuratPageModule)
  },
  {
    path: 'ads',
    loadChildren: () => import('./ads/ads.module').then( m => m.AdsPageModule)
  },
  {
    path: 'adss',
    loadChildren: () => import('./adss/adss.module').then( m => m.AdssPageModule)
  },
  
  

    
  {
    path: 'langpagecomponent',
    loadChildren: () => import('./langpagecomponent/langpagecomponent.module').then( m => m.LangpagecomponentPageModule)
  },
  {
    path: 'chatspage',
    loadChildren: () => import('./chatspage/chatspage.module').then( m => m.ChatspagePageModule)
  },
  {
    path: 'adspage',
    loadChildren: () => import('./adspage/adspage.module').then( m => m.AdspagePageModule)
  },
  {
    path: 'array',
    loadChildren: () => import('./array/array.module').then( m => m.ArrayPageModule)
  },
  {
    path: 'product-list',
    loadChildren: () => import('./product-list/product-list.module').then( m => m.ProductListPageModule)
  },
  {
    path: 'edit-product/:id',
    loadChildren: () => import('./edit-product/edit-product.module').then( m => m.EditProductPageModule)
  },
  {
    path: 'msg',
    loadChildren: () => import('./msg/msg.module').then( m => m.MsgPageModule)
  },
  {
    path: 'buy-package',
    loadChildren: () => import('./buy-package/buy-package.module').then( m => m.BuyPackagePageModule)
  },
  {
    path: 'categorylist/:name',
    loadChildren: () => import('./categorylist/categorylist.module').then( m => m.CategorylistPageModule)
  },
  {
    path: 'selcat',
    loadChildren: () => import('./selcat/selcat.module').then( m => m.SelcatPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'veglist',
    loadChildren: () => import('./veglist/veglist.module').then( m => m.VeglistPageModule)
  },
  {
    path: 'frulist',
    loadChildren: () => import('./frulist/frulist.module').then( m => m.FrulistPageModule)
  },
  {
    path: 'slide',
    loadChildren: () => import('./slide/slide.module').then( m => m.SlidePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'upp',
    loadChildren: () => import('./upp/upp.module').then( m => m.UppPageModule)
  },
  {
    path: 'buy',
    loadChildren: () => import('./buy/buy.module').then( m => m.BuyPageModule)
  },
  {
    path: 'showpackage',
    loadChildren: () => import('./showpackage/showpackage.module').then( m => m.ShowpackagePageModule)
  },
  {
    path: 'demo',
    loadChildren: () => import('./demo/demo.module').then( m => m.DemoPageModule)
  },
  {
    path: 'adsinfo',
    loadChildren: () => import('./adsinfo/adsinfo.module').then( m => m.AdsinfoPageModule)
  }
  

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
