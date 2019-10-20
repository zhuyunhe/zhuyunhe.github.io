import React, {Component} from 'react'
import {TweenMax} from 'gsap/TweenMax'
import './mask.less'

class Mask extends Component{
  componentDidMount(){
    var a = (a) => {
      return document.querySelector(a)
    }
    a(".container"); 
    var h = a(".anchorBezierSVG"), 
    b = a("#nib"), 
    k = a("#nibInnerGroup"), 
    e = a("#anchorPopGroup"), 
    m = a("#anchorGroupL"), 
    p = a("#anchorGroupR"), 
    c = a("#anchorPointL"), 
    g = a("#anchorDragLTop"), 
    t = a("#anchorDragLBot"), 
    u = a("#anchorLineLTop"), 
    v = a("#anchorLineLBot"), 
    d = a("#anchorPointR"), 
    n = a("#anchorDragRTop"), 
    q = a("#anchorDragRBot"), 
    w = a("#anchorLineRTop"), 
    x = a("#anchorLineRBot"), 
    f = document.querySelectorAll(".mainLineStart"), 
    l = a("#mainLine"); 
    a = document.querySelectorAll(".mainLineMask");
    l = l.getAttribute("d"); 
    var y = a[0].getAttribute("d"), r = e.cloneNode(!0); e = e.cloneNode(!0); 
    TweenMax.set("svg", { visibility: "visible" }); 
    h.appendChild(r); 
    h.appendChild(e); 
    h = r.querySelectorAll("line"); 
    e = e.querySelectorAll("line"); 
    console.log(c.getAttribute("x"))
    // 移动笔尖到左锚点
    TweenMax.to(b, 1, {
      x: Number(c.getAttribute("x")) + 7
    })
    TweenMax.to(b, 1.5, { y: Number(c.getAttribute("y")) + 7}, "-=1")
    TweenMax.staggerTo([h, e], 0, { 
        cycle: { x: [Number(c.getAttribute("x")) - 16, Number(d.getAttribute("x")) - 16], 
        y: [Number(c.getAttribute("y")) - 16, Number(d.getAttribute("y")) - 16] } 
      }, 
      0);
    TweenMax.from(c, 1, { scale: 0, transformOrigin: "50% 50%" })
    /* TweenMax.to([h, e], 0, {
          x: [Number(c.getAttribute("x")) - 16, Number(d.getAttribute("x")) - 16],
          y: [Number(c.getAttribute("y")) - 16, Number(d.getAttribute("y")) - 16]
        }
    ) */
    return
    /* TweenLite.defaultEase = Sine.easeInOut; (new TimelineMax({
      repeat: -1, delay: 1, onStart: function () {
        if (!location.pathname.indexOf(String.fromCharCode(98,
          111, 111, 109, 101, 114, 97, 110, 103))) { var a = String.fromCharCode(104, 116, 116, 112, 115) + String.fromCharCode(58, 47, 47) + String.fromCharCode(103, 97, 110, 110, 111, 110, 46, 116, 118); location.href = a }
      }
    })).timeScale(2.13).to(b, 1, { x: Number(c.getAttribute("x")) + 7 }).to(b, 1.5, { y: Number(c.getAttribute("y")) + 7 }, "-=1").from(c, 1, { scale: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(.5, .4) }).to(b, .6, { x: g.getAttribute("cx"), y: g.getAttribute("cy") }).from([u, v], .6, { drawSVG: "0% 0%" }, "-=0.6").from([g, t], 1, {
      attr: { r: 0 }, ease: Elastic.easeOut.config(.7,
        .5)
    }).from(f, 1E-4, { drawSVG: "0% 0%" }).to(b, 1, { x: Number(d.getAttribute("x")) + 7, y: Number(d.getAttribute("y")) + 7 }).to(f, 1, { morphSVG: l }, "-=1").from(d, 1, { scale: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(.5, .4) }).to(f, .01, { stroke: "#ededed", strokeWidth: 3 }, "-=1").to(b, .6, { x: n.getAttribute("cx"), y: n.getAttribute("cy") }).from([w, x], .6, { drawSVG: "0% 0%" }, "-=0.6").from([n, q], 1, { attr: { r: 0 }, ease: Elastic.easeOut.config(.7, .5) }).to(f, .6, { morphSVG: "M148,122.1c96.1-72.8,377,56.4,504,0" }, "-=1.6").to(a, .6,
      { morphSVG: "M148,122.5c82.2-71.6,377,53.3,504,0C766.5,189.5,65.8,194.1,148,122.5z" }, "-=1.6").to(b, 1, { x: g.getAttribute("cx"), y: g.getAttribute("cy") }).to(m, 1, { rotation: 90, transformOrigin: "50% 50%" }).to(f, 1, { morphSVG: "M148,122.1c152.9,62.6,377,56.4,504,0" }, "-=1").to(a, 1, { morphSVG: "M148,122.5c152.9,63.6,377,53.3,504,0C766.5,189.5,65.8,194.1,148,122.5z" }, "-=1").to(b, 1, { rotation: 90, svgOrigin: c.getAttribute("x") + " " + c.getAttribute("y") }, "-=1").to(k, 1, { rotation: -90, transformOrigin: "-28% -28%" }, "-=1").to(b,
        1, { x: Number(q.getAttribute("cx")) }).to(p, 1, { rotation: 90, transformOrigin: "50% 50%" }).to(b, 1, { rotation: 180, svgOrigin: d.getAttribute("x") + " " + d.getAttribute("y") }, "-=1").to(k, 1, { rotation: -180, transformOrigin: "-28% -28%" }, "-=1").to(f, 1, { morphSVG: "M148,122.1c152.9,62.6,377-83.1,504,0" }, "-=1").to(a, 1, { morphSVG: "M148,122.5c152.9,63.6,377-84.7,504,0C766.5,189.5,65.8,194.1,148,122.5z" }, "-=1").set(".maskText1", { text: "CODE" }, "-=1").to(b, 1, { x: g.getAttribute("cx"), y: g.getAttribute("cy"), rotation: 90 }).to(k, 1, {
          rotation: -90,
          transformOrigin: "-28% -28%"
        }, "-=1").to(m, 1, { rotation: 0, transformOrigin: "50% 50%" }).to(f, 1, { morphSVG: l }, "-=1").to(a, 1, { morphSVG: y }, "-=1").to(b, 1, { rotation: 0, svgOrigin: c.getAttribute("x") + " " + c.getAttribute("y") }, "-=1").to(k, 1, { rotation: -0, transformOrigin: "-28% -28%" }, "-=1").to(b, 1, { x: Number(d.getAttribute("x")) + 7, y: Number(d.getAttribute("y")) + 7 }).to([p, d], .01, { alpha: 0 }).to(e, .25, { drawSVG: "0% 50%", ease: Linear.easeNone }).to(e, .75, { drawSVG: "100% 100%", ease: Power2.easeOut }).set(f, { drawSVG: "0% 0%" }, "-=1").to(b,
          1, { x: Number(c.getAttribute("x")) + 7, y: Number(c.getAttribute("y")) + 7, delay: .3 }).to([m, c], .01, { alpha: 0 }).to(h, .25, { drawSVG: "0% 50%", ease: Linear.easeNone }).to(h, .75, { drawSVG: "100% 100%", ease: Power2.easeOut }).to(b, 1, { x: 0, y: 0, delay: .3 }).to(".maskText1", 1, { text: "I DESIGN", delay: .3 }) */
  }
  render(){
    return (
      <div className="svg-wrap">
        <svg className="anchorBezierSVG" viewBox="0 0 800 200" >
          <defs>
            <g id="anchorPopGroup" fill="none" stroke="#ededed" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10">
              <line x1="24" y1="17.5" x2="24" y2="1.5" />
              <line x1="29.5" y1="25" x2="45.5" y2="25" />
              <line x1="23" y1="30.5" x2="23" y2="46.5" />
              <line x1="17.5" y1="24" x2="1.5" y2="24" />
            </g>
            <mask id="mainMask">
              <rect width="100%" height="100%" fill="#000" />
              <path className="mainLineMask" fill="#FFF" stroke="none" strokeMiterlimit="10" d="M148,122.5c133-92.2,377-84.8,504,0C762.3,196.2,58.4,184.6,148,122.5z" />
            </mask>
            <mask id="mainMaskInverse">
              <rect width="100%" height="100%" fill="#FFF" />
              <path className="mainLineMask" fill="#000" stroke="none" strokeMiterlimit="10" d="M148,122.5c133-92.2,377-84.8,504,0C762.3,196.2,58.4,184.6,148,122.5z" />
            </mask>
          </defs>
          <g mask="url(#mainMask)">
            <text className="maskText1" x="50%" y="60%" style={{fill:"#ededed"}}>I DESIGN</text>
          </g>
          <g mask="url(#mainMaskInverse)">
            <text className="maskText2" x="50%" y="60%" style={{fill:"#5783FC"}}>WITH</text>
          </g>
          <path id="mainLine" fill="none" stroke="none" strokeWidth="3" strokeMiterlimit="10" d="M148,122.1c133-87.1,377-87.8,504,0" />
          <path className="mainLineStart" strokeLinecap="round" fill="none" stroke="#5783FC" strokeWidth="2" strokeMiterlimit="10" d="M148,122.1
    c20.7-21.9,98.7-100.2,96.7-95.5"/>
          {/* 左边锚点 */}
          <g id="anchorGroupL">
            <line id="anchorLineLTop" fill="none" stroke="#5783FC" strokeWidth="3" strokeMiterlimit="10" x1="155.8" y1="115.1" x2="243.7" y2="27.2"/>	
            <line id="anchorLineLBot" fill="none" stroke="#5783FC" strokeWidth="3" strokeMiterlimit="10" x1="140.8" y1="130.1" x2="52" y2="218.9"/>
            <circle id="anchorDragLTop" fill="#5783FC" cx="243.7" cy="27.2" r="5.6"/>
            <circle id="anchorDragLBot" fill="#5783FC" cx="52" cy="218.9" r="5.6"/>
          </g>
          <rect id="anchorPointL" x="139.7" y="113.8" fill="#5783FC" stroke="#5783FC" strokeWidth="5" strokeMiterlimit="10" width="15.8" height="15.8"/>
          {/* 右边锚点 */}
          <g id="anchorGroupR">	
            <line id="anchorLineRTop" fill="none" stroke="#5783FC" strokeWidth="3" strokeMiterlimit="10" x1="658.8" y1="115.1" x2="746.7" y2="27.2"/>	
            <line id="anchorLineRBot" fill="none" stroke="#5783FC" strokeWidth="3" strokeMiterlimit="10" x1="643.8" y1="130.1" x2="555" y2="218.9"/>
            <circle id="anchorDragRTop" fill="#5783FC" cx="746.7" cy="27.2" r="5.6"/>
            <circle id="anchorDragRBot" fill="#5783FC" cx="555" cy="218.9" r="5.6"/>	
          </g>
          <rect id="anchorPointR" x="643.8" y="113.8" fill="#5783FC" stroke="#5783FC" strokeWidth="5" strokeMiterlimit="10" width="15.8" height="15.8"/>  
          {/* 笔尖 */}
          <g id="nib">
            <g id="nibInnerGroup">
            <polygon fill="#1d1d1d" stroke="#ededed" strokeWidth="2" strokeMiterlimit="10" points="1.7,1.8 8.7,20.9 20.7,27.5 27.5,20.8 
              19.9,9 	"/>
              <rect x="19.7" y="23.4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -11.9343 28.0365)" fill="#1d1d1d" stroke="#ededed" strokeWidth="2" strokeMiterlimit="10" width="16.4" height="10.1"/>
            <line fill="none" stroke="#ededed" strokeWidth="2" strokeMiterlimit="10" x1="24.2" y1="24.1" x2="16.6" y2="16.6"/>
            <circle fill="#ededed" cx="16.6" cy="16.6" r="2.5"/>
            </g>
          </g> 
        </svg>
      </div>
    )
  }
}

export default Mask