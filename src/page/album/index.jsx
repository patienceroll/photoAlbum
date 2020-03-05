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


    componentDidMount() {
    
    }


    // 相册集滑动
    scrollTopAnimate() {

        const albumContainer = document.getElementsByClassName('albumContainer')[0];

        let id = null;
        function scroll() {
            // 为了避免执行程序的时候滚动滚轮,所以在没滚动到位置之前一直进行赋值
            albumContainer.style.top = 'calc(100vh)';

            const top = window.scrollY;

            if (top > 0) {
                window.scrollTo(0, top - Math.min(top / 65) - 3);
                id = window.requestAnimationFrame(scroll);
            }

            if (top <= 0) {
                window.scrollTo(0, 0);
                cancelAnimationFrame(id);
                document.getElementsByClassName('downIconContainer')[0].className = 'downIconContainer';
                document.getElementsByClassName('XIcon')[0].className = 'XIcon displayNone';
            }
        }

        scroll();
    }

    // 渲染相册
    renderPhotoAlbum() {
        const { photoList } = this.state;
    }

    render() {
        return <div className='albumContainer'>
            {/* 关闭相册集按钮 */}
            <div
                className='XIcon displayNone'
                onClick={e => this.scrollTopAnimate()}
            >
                {XIcon({ color: '#fff' })}
            </div>

            <div className='albumContainerInner'>

            </div>
        </div>
    }
}

export default Album;