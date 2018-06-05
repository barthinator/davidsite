import React, { Component } from "react";
import './css/Top.css';
import Anime from 'react-anime';

let Top = () => {
      <div className="Top">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 1280 720">
         <Anime easing="easeOutQuad"
               duration={1500}
               delay={(el, index) => index * 200}
               strokeDashoffset={ (el) => {
                      var pathLength = 0;
                    if (el.getTotalLength) {
                      pathLength = el.getTotalLength();
                      el.setAttribute('stroke-dasharray', pathLength);
                                }
                  return [pathLength, 0];
                  }}>
                  <path class="st1" d="M568.3,489.2"/>
                  <path class="st1" d="M568.3,368.6"/>
                  <path class="st1" d="M515.4,313"/>
                  <path class="st1" d="M568.3,483.5"/>
                  <path class="st1" d="M467.8,405.9"/>
                  <path class="st1" d="M568.3,405.2"/>
                  <path class="st1" d="M476.8,169.8c0,0,198.6,137.1,201,361.5c0,0,18.5-226.4,157.1-361.5"/>
                  <path class="st1" d="M814.7,314.5"/>
                  <path class="st1" d="M470.7,298.1c0,0,107.4-35.8,107.4,108.6S448.7,489.2,459.9,424c12.1-70.7,74.9-30.2,72.4,3.3"/>
                  <path class="st1" d="M1003.1,223.2c0,0,6.6,39.5,6.6,183.9s-129.4,79.6-118.2,14.3c12.1-70.7,74.5-36.4,72-2.9"/>
                  <path class="st1" d="M820.6,360.5c-2.2,26.4-23.2,142.6-5.8,132.9"/>
                  <path class="st1" d="M814.1,275.8c0,0,38.8-29,38.8,18.2s-42.3,35-38.6,13.7c4-23.1,24.3-12.9,23.5-1.9"/>
                  <path class="st1" d="M376.9,224.6c0,0,6.6,39.5,6.6,183.9s-129.4,79.6-118.2,14.3c12.1-70.7,74.5-36.4,72-2.9"/>
          </Anime>
        </svg>
      </div>
}
