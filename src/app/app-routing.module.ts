import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PostsListComponent} from './posts-list/posts-list.component';
import {PostComponent} from './post/post.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'posts/:id', component: PostComponent},
  {path: 'posts', component: PostsListComponent},
  {path: '', pathMatch: 'full', redirectTo: '/posts'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
