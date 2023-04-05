import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:"book",
    pathMatch: "full"
  },
  {
    path: "auth",
    loadChildren:()=>import("./module/auth/auth.module").then(a=>a.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
