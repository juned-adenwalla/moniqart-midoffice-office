import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CoursesViewComponent } from './components/courses/courses-view/courses-view.component';
import { CoursesListComponent } from './components/courses/courses-list/courses-list.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { CategoryViewComponent } from './components/category/category-view/category-view.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserViewComponent } from './components/users/user-view/user-view.component';
import { MarkupListComponent } from './components/markups/markup-list/markup-list.component';
import { OfferViewComponent } from './components/markups/offer-view/offer-view.component';
import { CurrencyViewComponent } from './components/markups/currency-view/currency-view.component';
import { FeeViewComponent } from './components/markups/fee-view/fee-view.component';
import { SettingsComponent } from './components/settings/settings.component';
import { EmailtempComponent } from './components/emailtemp/emailtemp.component';
import { SubscriptionListComponent } from './components/subscription/subscription-list/subscription-list.component';
import { SubscriptionViewComponent } from './components/subscription/subscription-view/subscription-view.component';
import { BlogListComponent } from './components/blogs/blog-list/blog-list.component';
import { BlogViewComponent } from './components/blogs/blog-view/blog-view.component';
import { LessonViewComponent } from './components/courses/lesson-view/lesson-view.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductViewComponent } from './components/products/product-view/product-view.component';
import { BannerListComponent } from './components/banners/banner-list/banner-list.component';
import { BannerViewComponent } from './components/banners/banner-view/banner-view.component';
import { GalleryListComponent } from './components/gallery/gallery-list/gallery-list.component';
import { GalleryFormComponent } from './components/gallery/gallery-form/gallery-form.component';
import { CountryListComponent } from './components/country/country-list/country-list.component';
import { CountryViewComponent } from './components/country/country-view/country-view.component';
import { StateListComponent } from './components/states/state-list/state-list.component';
import { StateViewComponent } from './components/states/state-view/state-view.component';
import { NewsViewComponent } from './components/markups/news-view/news-view.component';
import { ReviewListComponent } from './components/reviews/review-list/review-list.component';
import { ReviewViewComponent } from './components/reviews/review-view/review-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    CoursesViewComponent,
    CoursesListComponent,
    CategoryListComponent,
    CategoryViewComponent,
    UserListComponent,
    UserViewComponent,
    MarkupListComponent,
    OfferViewComponent,
    CurrencyViewComponent,
    FeeViewComponent,
    SettingsComponent,
    EmailtempComponent,
    SubscriptionListComponent,
    SubscriptionViewComponent,
    BlogListComponent,
    BlogViewComponent,
    LessonViewComponent,
    LoginComponent,
    ProductListComponent,
    ProductViewComponent,
    BannerListComponent,
    BannerViewComponent,
    GalleryListComponent,
    GalleryFormComponent,
    CountryListComponent,
    CountryViewComponent,
    StateListComponent,
    StateViewComponent,
    NewsViewComponent,
    ReviewListComponent,
    ReviewViewComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
