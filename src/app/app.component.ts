import { Component, ViewChild } from '@angular/core';
import { DiagramComponent, BasicShapeModel, NodeModel, DiagramTools, PathModel, TextModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Digram';
  constructor(){}
  @ViewChild("diagram") diagram:any
  public drawingshape: any
  public node: any
  public connectors: any;
  width:number=0
  height:number=0
    public getNodeDefaults(node: any): NodeModel {
        // node.height = 100;
        // node.width = 100;
        node.style.fill = "#ffffff";
        node.style.strokeColor = "black";
        // console.log(node)
        return node;
    }
    public created(args: Object): void {
        //JSON to create a rectangle
        this.drawingshape = { type: 'Basic', shape: 'Rectangle' };
        this.node = {
            shape: this.drawingshape
        };
        this.diagram.drawingObject = this.node;
        //To draw an object once, activate draw once
        this.diagram.tool = DiagramTools.DrawOnce;
        // console.log(this.node)
        this.diagram.dataBind();
    }
    public createdStar(args: Object): void {
      //JSON to create a path
      this.node = {
          id: "Path",
          style: { fill: "#fbe172" },
          annotations: [{
              content: "Path"
          }],
          shape: {
              type:'Path',
              data: 'M13.560 67.524 L 21.941 41.731 L 0.000 25.790 L 27.120 25.790 L 35.501 0.000 L 43.882 25.790 L 71.000 25.790 L 49.061 41.731 L 57.441 67.524 L 35.501 51.583 z'
          } as PathModel
      };
      this.diagram.drawingObject = this.node;
      //To draw an object once, activate draw once
      this.diagram.tool = DiagramTools.DrawOnce;
      this.diagram.dataBind();
  }
  public createdArow(args: Object): void {
    //JSON to create a path
    this.connectors = {
        id: 'connector1',
        type: 'Straight',
        segments: [{ type: "polyline" }]
    };
    this.diagram.drawingObject = this.connectors;
    //To draw an object once, activate draw once
    this.diagram.tool = DiagramTools.DrawOnce;
    this.diagram.dataBind();
}
public createdText(args: Object): void {
  //JSON to create a path
  this.node = {
      shape: {
          type:'Text',
      } as TextModel
  };
  this.diagram.drawingObject = this.node;
  //To draw an object once, activate draw once
  this.diagram.tool = DiagramTools.DrawOnce;
  this.diagram.dataBind();
}
public createdPolygon(args: Object): void {
  //JSON to create a rectangle
  this.drawingshape = { type: 'Basic', shape: 'Polygon' };
  this.node = {
      shape: this.drawingshape
  };
  this.diagram.drawingObject = this.node;
  //To draw an object once, activate draw once
  this.diagram.tool = DiagramTools.DrawOnce;
  this.diagram.dataBind();
}
}
