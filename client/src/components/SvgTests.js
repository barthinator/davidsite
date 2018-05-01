import React, {Component} from 'react';
import Snap from 'snapsvg-cjs';
import mina from 'snapsvg-cjs'
//insert Element.prototype.limitDrag function here
class Slider extends Component{
  componentDidMount() {
    var s = Snap("#svg")
    s.attr({ viewBox: "0 0 600 600" });
    var f = s.filter(Snap.filter.blur(5, 10));
    var shadow = s.filter(Snap.filter.shadow(0, 2, 3));
    var filterChild = f.node.firstChild;

    var r = s.rect(100,100,100,100,20,20).attr({ stroke: '#123456', 'strokeWidth': 20, fill: 'red', filter:  f });
    Snap.animate( 0, 10, function( value ) { filterChild.attributes[0].value = value + ',' + value;  }, 1000 );

    var t = s.text(0,50, 'Hover to blur, hover out for shadow' );

    r.hover( addBlur, addShadow );

    function addBlur() {
    	this.attr({ filter: f });
    	Snap.animate( 0, 10, function( value ) { filterChild.attributes[0].value = value + ',' + value;  }, 1000 );
    };

    function addShadow() {
    	this.attr({ filter: shadow });
    };
   }
render () {
    return (
      <svg id="svg"/>
    )
  }
}
export default Slider
