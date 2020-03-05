import React from 'react';

import { XIcon } from '../../assets/icon(componenty)/icon.js';

import './index.css';



class Album extends React.Component {

    state = {
        photoList: [
            {
                gatherTitle: '水库之旅',
                photos: [
                    'http://114.55.28.254/page/photoalbum/photoLibrary/bgi/bgi1.jpg',
                    'http://114.55.28.254/page/photoalbum/photoLibrary/bgi/bgi2.jpg',
                    'http://114.55.28.254/page/photoalbum/photoLibrary/bgi/bgi3.jpg'
                ],
                describle: '南湖水库春游'
            },
            {
                gatherTitle: '成都',
                photos: [
                    'http://114.55.28.254/page/photoalbum/photoLibrary/bgi/bgi1.jpg',
                    'http://114.55.28.254/page/photoalbum/photoLibrary/bgi/bgi2.jpg',
                    'http://114.55.28.254/page/photoalbum/photoLibrary/bgi/bgi3.jpg'
                ],
                describle: '春熙路逛吃'
            },
            {
                gatherTitle: '武隆',
                photos: [
                    'http://114.55.28.254/page/photoalbum/photoLibrary/bgi/bgi1.jpg',
                    'http://114.55.28.254/page/photoalbum/photoLibrary/bgi/bgi2.jpg',
                    'http://114.55.28.254/page/photoalbum/photoLibrary/bgi/bgi3.jpg'
                ],
                describle: '武隆苕粉？'
            }
        ]
    }

    componentDidMount(){
        this.albumContainer = document.getElementsByClassName('albumContainer')[0];
    }

    // 相册集滑动
    scrollTopAnimate() {
        // 先滚动album 到顶部
        this.albumContainer.style.top = 'calc(100vh)';

        // 然后滚下来轮播图
        let id = null;
        function scroll() {
            const top = window.scrollY;
            if (top > 0) {
                window.scrollTo(0, top - Math.min(top / 65) - 3);
                id = window.requestAnimationFrame(scroll);
            }
            if (top <= 0) {
                window.scrollTo(0, 0);
                cancelAnimationFrame(id);
                document.getElementsByClassName('downIconContainer')[0].className = 'downIconContainer';
            }
        }
        scroll();
    }




    render() {
        return <div
            className='albumContainer'
            onClick={e => this.scrollTopAnimate()}
        >
            <h1 style={{ color: '#fff', backgroundColor: 'rgba(0,0,0,0.5)' }}>此页面用来展示每个相册合集里面的相片.</h1>
            <div>{XIcon({ color: '#fff' })}</div>
        </div>
    }
}

export default Album;