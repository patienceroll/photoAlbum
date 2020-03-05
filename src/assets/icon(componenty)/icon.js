import React from 'react';

// 箭头
const Arrow = config => <svg 
            version="1.1" 
            id="Capa_1" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink" 
            x="0px" 
            y="0px"
            viewBox="0 0 49.656 49.656" 
            style={{enableBackground:'new 0 0 49.656 49.656',width:config.width,height:config.height}} 
            xmlSpace="preserve"
        >
            <g> 
            <polygon style={{fill:`${config.color || '#fff'}`}} points="35.121,1.414 37.949,4.242 17.364,24.828 37.949,45.414 35.121,48.242 11.707,24.828 	"/>
            <path style={{fill:`${config.color || '#fff'}`}} d="M35.122,49.656L10.292,24.828L35.121,0l4.242,4.242L18.778,24.828l20.586,20.586L35.122,49.656zM13.121,24.828l22.001,22l1.414-1.414L15.95,24.828L36.535,4.242l-1.414-1.414L13.121,24.828z"/>
            </g>
        </svg>

const XIcon = (config) => <svg 
            style={{enableBackground:'new 0 0 32 32'}} 
            xmlns="http://www.w3.org/2000/svg" 
            xmlSpace="preserve" 
            height={config.height || '32px'} 
            width={config.width || '32px'} 
            version="1.1" y="0px" x="0px" 
            xmlnsXlink="http://www.w3.org/1999/xlink" 
            viewBox="0 0 32 32"
        >
            <path d="m16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7-16-16-16zm8 21l-2.8 2.8-5-5-5.1 5.1-2.8-2.8 4.8-5-5.1-5.1 2.8-2.8 5 4.8 5.1-5.1 2.8 2.8-5 5 5 5z" fill={config.color||'#010101'}/>
        </svg>

const Down = (config) => <svg 
            viewBox="0 0 17 17" 
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="si-glyph si-glyph-arrow-down"
            style={{width:config.width || 'inherit',height:config.height || 'inherit'}}
        >       
                <defs></defs>   
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">       
                <path 
                    d="M2.16,6.246 C2.385,6.246 2.61,6.308 2.81,6.442 L9.039,10.598 L15.076,6.401 C15.617,6.042 16.346,6.188 16.705,6.729 C17.065,7.268 16.92,8 16.38,8.359 L9.692,12.989 C9.298,13.253 8.784,13.254 8.388,12.991 L1.508,8.402 C0.966,8.042 0.82,7.31 1.179,6.77 C1.407,6.429 1.78,6.246 2.16,6.246 L2.16,6.246 Z" 
                    fill={config.color||'#434343'} 
                    className="si-glyph-fill">
                </path>   
                </g>
        </svg>

export {
    Arrow,
    XIcon,
    Down
}