import { Injectable } from '@angular/core';
import { Content } from './content';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class ContentService {
  contentRef: AngularFireObject<any>;
  
  // Inject AngularFireDatabase Dependency in Constructor
  constructor(private db: AngularFireDatabase) { }

  GetContent(id: string) {
    this.contentRef = this.db.object('content/' + id);
    return this.contentRef;
  }

  UpdateContent(content: Content) {
    this.contentRef.update({
      text: content.text
    })
  }  
}
