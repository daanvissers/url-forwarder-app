import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subscription } from 'rxjs';
import { Url } from 'src/app/interfaces/url';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  subscriptions: Subscription = new Subscription();

  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    const urlsRef = this.afs.collection<Url>('urls', ref => ref.orderBy('date', 'desc').limit(1)).valueChanges();
    const urlSub = urlsRef.subscribe(res => {
      window.location.href = res[0].url;
    });
    this.subscriptions.add(urlSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
