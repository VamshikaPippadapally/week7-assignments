import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { HomeViewComponent } from '../home-view/home-view.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeDetails
  @ViewChild('templateRef',{read:ViewContainerRef}) entry: ViewContainerRef;
  constructor(private readonly resolver:ComponentFactoryResolver) { }

  ngOnInit() {
    this.renderDynamicCompponent();
  }
  renderDynamicCompponent(){
    const dynamic=this.resolver.resolveComponentFactory(HomeViewComponent);
    this.homeDetails=this.entry.createComponent(dynamic);
  }

}