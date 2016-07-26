/// <reference path="../../../typings/globals/backbone/index.d.ts" />
/// <reference path="../../../typings/globals/jointjs/index.d.ts" />

import {Component, OnInit} from '@angular/core';

declare var $:any;


@Component({
  moduleId: module.id,
  selector: 'joint-js',
  templateUrl: 'joint-js.component.html',
  styleUrls: ['joint-js.component.css']
})
export class JointJsComponent implements OnInit {
  private jQuery:any = $;

  constructor() {
  }

  ngOnInit() {
    let graph:joint.dia.Graph = new joint.dia.Graph;
    let paper:joint.dia.Paper = new joint.dia.Paper(<Backbone.ViewOptions<Backbone.Model>>{
      el: this.jQuery("#paper"),
      width: 800,
      height: 600,
      model: graph,
      gridSize: 1
    });

    let rect:any = new joint.shapes.basic.Rect({
      position: {x: 100, y: 30},
      size: {width: 100, height: 30},
      attrs: {rect: {fill: 'blue'}, text: {text: 'my box', fill: 'white'}}
    });

    let rect2:joint.shapes.basic.Rect = <joint.shapes.basic.Rect>rect.clone();
    rect2.translate(300);

    let link:any = new joint.dia.Link({
      source: {id: rect.id},
      target: {id: rect2.id}
    });

    graph.addCells([rect, rect2, link]);
  }

}


