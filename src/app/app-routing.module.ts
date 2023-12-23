import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CoursesListComponent } from './components/courses/courses-list/courses-list.component';
import { CoursesViewComponent } from './components/courses/courses-view/courses-view.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { CategoryViewComponent } from './components/category/category-view/category-view.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserViewComponent } from './components/users/user-view/user-view.component';
import { MarkupListComponent } from './components/markups/markup-list/markup-list.component';
import { CurrencyViewComponent } from './components/markups/currency-view/currency-view.component';
import { FeeViewComponent } from './components/markups/fee-view/fee-view.component';
import { OfferViewComponent } from './components/markups/offer-view/offer-view.component';
import { SettingsComponent } from './components/settings/settings.component';
import { EmailtempComponent } from './components/emailtemp/emailtemp.component';
import { SubscriptionListComponent } from './components/subscription/subscription-list/subscription-list.component';
import { SubscriptionViewComponent } from './components/subscription/subscription-view/subscription-view.component';
import { BlogListComponent } from './components/blogs/blog-list/blog-list.component';
import { BlogViewComponent } from './components/blogs/blog-view/blog-view.component';
import { LessonViewComponent } from './components/courses/lesson-view/lesson-view.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductViewComponent } from './components/products/product-view/product-view.component';
import { BannerListComponent } from './components/banners/banner-list/banner-list.component';
import { BannerViewComponent } from './components/banners/banner-view/banner-view.component';
import { GalleryListComponent } from './components/gallery/gallery-list/gallery-list.component';
import { GalleryFormComponent } from './components/gallery/gallery-form/gallery-form.component';
import { StateListComponent } from './components/states/state-list/state-list.component';
import { StateViewComponent } from './components/states/state-view/state-view.component';
import { CountryListComponent } from './components/country/country-list/country-list.component';
import { CountryViewComponent } from './components/country/country-view/country-view.component';
import { NewsViewComponent } from './components/markups/news-view/news-view.component';
import { ReviewListComponent } from './components/reviews/review-list/review-list.component';
import { ReviewViewComponent } from './components/reviews/review-view/review-view.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,pathMatch:'full',canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'manage-courses',component:CoursesListComponent,canActivate:[AuthGuard]},
  {path:'add-course',component:CoursesViewComponent,canActivate:[AuthGuard]},
  {path:'edit-course/:id',component:CoursesViewComponent,canActivate:[AuthGuard]},
  {path:'manage-lessons',component:CoursesListComponent,canActivate:[AuthGuard]},
  {path:'add-lesson',component:LessonViewComponent,canActivate:[AuthGuard]},
  {path:'edit-lesson/:id',component:LessonViewComponent,canActivate:[AuthGuard]},
  {path:'manage-categories',component:CategoryListComponent,canActivate:[AuthGuard]},
  {path:'add-category',component:CategoryViewComponent,canActivate:[AuthGuard]},
  {path:'edit-category/:id',component:CategoryViewComponent,canActivate:[AuthGuard]},
  {path:'manage-users',component:UserListComponent,canActivate:[AuthGuard]},
  {path:'add-user',component:UserViewComponent,canActivate:[AuthGuard]},
  {path:'edit-user/:id',component:UserViewComponent,canActivate:[AuthGuard]},
  {path:'manage-markups',component:MarkupListComponent,canActivate:[AuthGuard]},
  {path:'add-currency',component:CurrencyViewComponent,canActivate:[AuthGuard]},
  {path:'edit-currency/:id',component:CurrencyViewComponent,canActivate:[AuthGuard]},
  {path:'add-fee',component:FeeViewComponent,canActivate:[AuthGuard]},
  {path:'edit-fee/:id',component:FeeViewComponent,canActivate:[AuthGuard]},
  {path:'add-coupon',component:OfferViewComponent,canActivate:[AuthGuard]},
  {path:'edit-coupon/:id',component:OfferViewComponent,canActivate:[AuthGuard]},
  {path:'manage-settings',component:SettingsComponent,canActivate:[AuthGuard]},
  {path:'manage-templates',component:EmailtempComponent,canActivate:[AuthGuard]},
  {path:'manage-subscriptions',component:SubscriptionListComponent,canActivate:[AuthGuard]},
  {path:'add-subscription',component:SubscriptionViewComponent,canActivate:[AuthGuard]},
  {path:'edit-subscription/:id',component:SubscriptionViewComponent,canActivate:[AuthGuard]},
  {path:'manage-posts',component:BlogListComponent,canActivate:[AuthGuard]},
  {path:'add-post',component:BlogViewComponent,canActivate:[AuthGuard]},
  {path:'edit-post/:id',component:BlogViewComponent,canActivate:[AuthGuard]},
  {path:'manage-products',component:ProductListComponent,canActivate:[AuthGuard]},
  {path:'add-product',component:ProductViewComponent,canActivate:[AuthGuard]},
  {path:'edit-product/:id',component:ProductViewComponent,canActivate:[AuthGuard]},
  {path:'manage-banners',component:BannerListComponent,canActivate:[AuthGuard]},
  {path:'add-banner',component:BannerViewComponent,canActivate:[AuthGuard]},
  {path:'edit-banner/:id',component:BannerViewComponent,canActivate:[AuthGuard]},
  {path:'manage-galleries',component:GalleryListComponent,canActivate:[AuthGuard]},
  {path:'add-gallery',component:GalleryFormComponent,canActivate:[AuthGuard]},
  {path:'edit-gallery/:id',component:GalleryFormComponent,canActivate:[AuthGuard]},
  {path:'manage-state',component:StateListComponent,canActivate:[AuthGuard]},
  {path:'add-state',component:StateViewComponent,canActivate:[AuthGuard]},
  {path:'edit-state/:id',component:StateViewComponent,canActivate:[AuthGuard]},
  {path:'manage-country',component:CountryListComponent,canActivate:[AuthGuard]},
  {path:'add-country',component:CountryViewComponent,canActivate:[AuthGuard]},
  {path:'edit-country/:id',component:CountryViewComponent,canActivate:[AuthGuard]},
  {path:'add-news',component:NewsViewComponent,canActivate:[AuthGuard]},
  {path:'edit-news/:id',component:NewsViewComponent,canActivate:[AuthGuard]},
  {path:'manage-reviews',component:ReviewListComponent,canActivate:[AuthGuard]},
  {path:'edit-review/:id',component:ReviewViewComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
