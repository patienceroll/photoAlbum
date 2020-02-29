import React from 'react';

// 箭头
const Arrow = config => <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 49.656 49.656" style={{enableBackground:'new 0 0 49.656 49.656',width:config.width,height:config.height}} xmlSpace="preserve">
    <g> 
        <polygon style={{fill:`${config.color || '#fff'}`}} points="35.121,1.414 37.949,4.242 17.364,24.828 37.949,45.414 35.121,48.242 11.707,24.828 	"/>
        <path style={{fill:`${config.color || '#fff'}`}} d="M35.122,49.656L10.292,24.828L35.121,0l4.242,4.242L18.778,24.828l20.586,20.586L35.122,49.656z
    M13.121,24.828l22.001,22l1.414-1.414L15.95,24.828L36.535,4.242l-1.414-1.414L13.121,24.828z"/>
    </g>
</svg>

export {
    Arrow
}