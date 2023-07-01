import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login-signup',
    loadChildren: () =>
      import('./modules/login-signup/login-signup.module').then(
        (m) => m.LoginSignupModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'dash-board',
    loadChildren: () =>
      import('./modules/dash-board/dash-board.module').then(
        (m) => m.DashBoardModule
      ),
  },
  {
    path: 'add-review',
    loadChildren: () =>
      import('./modules/adding-review/adding-review.module').then(
        (m) => m.AddingReviewModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./modules/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'view-document',
    loadChildren: () =>
      import('./modules/view-document/view-document.module').then((m) => m.ViewDocumentModule),
  },
  {
    path: 'apps',
    loadChildren: () =>
      import('./modules/apps/apps.module').then((m) => m.AppsModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/landing-page/landing-page.module').then((m) => m.LandingPageModule),
  },
  {
    path: 'history',
    loadChildren: () =>
      import('./modules/history/history.module').then((m) => m.HistoryModule),
  },
  {
    path: 'add-service',
    loadChildren: () =>
      import('./modules/add-service/add-service.module').then((m) => m.AddServiceModule),
  },
  {
    path: 'branchServices',
    loadChildren: () =>
      import('./modules/branch-services/branch-services.module').then((m) => m.BranchServicesModule),
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
