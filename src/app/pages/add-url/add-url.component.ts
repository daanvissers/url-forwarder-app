import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Url } from 'src/app/interfaces/url';

@Component({
  selector: 'app-add-url',
  templateUrl: './add-url.component.html',
  styleUrls: ['./add-url.component.scss']
})
export class AddUrlComponent implements OnInit {

  userInput!: string;

  constructor(private afStore: AngularFirestore) { }

  ngOnInit(): void {
  }

  addUrl(): void {
    const url: Url = {
      url: this.userInput,
      date: Date()
    };

    this.afStore.collection<Url>('urls').add(url).then(res => {
      console.log(res);
    });
  }

}
