import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {PostListComponent} from './post-list/post-list.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'posts'},
  {path: 'posts/:postId', component: PostDetailComponent},
  {path: 'posts', component: PostListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
