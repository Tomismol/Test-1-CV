import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'targeted', loadChildren: './targeted/targeted.module#TargetedPageModule' },
  { path: 'project', loadChildren: './project/project.module#ProjectPageModule' },
  { path: 'extra', loadChildren: './extra/extra.module#ExtraPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
