import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from './chat-box/chat-box.component';
// Inlcude the RouterModule
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [ChatBoxComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      // Include routing for chat component
      { path: 'chat', component: ChatBoxComponent }
    ])
  ]
})
export class ChatModule { }
