import React from 'react';

import { XIcon } from '../../assets/icon(componenty)/icon.js';

import './index.css';



class Album extends React.Component {

    state = {
        photoList: [
            {
                gatherTitle: '水库之旅',
                photos: [
                    {
                        url: 'http://114.55.28.254/page/photoalbum/photoLibrary/bgi/bgi1.jpg',
                        praise: 0,
                        disLike: 0
                    },
                    {
                        url: 'http://114.55.28.254/page/photoalbum/photoLibrary/bgi/bgi3.jpg',
                        praise: 0,
                        disLike: 0
                    },
                    {
                        url: 'http://114.55.28.254/page/photoalbum/photoLibrary/bgi/bgi2.jpg',
                        praise: 0,
                        disLike: 0
                    }
                ],
                describle: '南湖水库春游'
            },
            {
                gatherTitle: '成都',
                photos: [
                    {
                        url: 'http://114.55.28.254/page/photoalbum/photoLibrary/bgi/bgi1.jpg',
                        praise: 0,
                        disLike: 0
                    },
                    {
                        url: 'http://114.55.28.254/page/photoalbum/photoLibrary/bgi/bgi3.jpg',
                        praise: 0,
                        disLike: 0
                    },
                    {
                        url: 'http://114.55.28.254/page/photoalbum/photoLibrary/bgi/bgi2.jpg',
                        praise: 0,
                        disLike: 0
                    }
                ],
                describle: '春熙路逛吃'
            },
            {
                gatherTitle: '武隆',
                photos: [
                    {
                        url: 'http://114.55.28.254/page/photoalbum/photoLibrary/bgi/bgi1.jpg',
                        praise: 0,
                        disLike: 0
                    },
                    {
                        url: 'http://114.55.28.254/page/photoalbum/photoLibrary/bgi/bgi3.jpg',
                        praise: 0,
                        disLike: 0
                    },
                    {
                        url: 'http://114.55.28.254/page/photoalbum/photoLibrary/bgi/bgi2.jpg',
                        praise: 0,
                        disLike: 0
                    }
                ],
                describle: '武隆苕粉？'
            },
            {
                gatherTitle: '武隆',
                photos: [
                    {
                        url: 'http://114.55.28.254/page/photoalbum/photoLibrary/bgi/bgi1.jpg',
                        praise: 0,
                        disLike: 0
                    },
                    {
                        url: 'http://114.55.28.254/page/photoalbum/photoLibrary/bgi/bgi3.jpg',
                        praise: 0,
                        disLike: 0
                    },
                    {
                        url: 'http://114.55.28.254/page/photoalbum/photoLibrary/bgi/bgi2.jpg',
                        praise: 0,
                        disLike: 0
                    }
                ],
                describle: '武隆苕粉？'
            }
        ]
    }

    // 鼠标 hover albumItemCover
    albumItemCoverHover(index) {
        const DOMelement = document.getElementsByClassName('albumItemCover')[index];
        const { children } = DOMelement;
        children[0].style.transform = 'translateY(100%)';
        children[1].style.transform = 'translateX(100%)';
        children[2].style.transform = 'translate(200%,-100%)';
    }


    // 鼠标离开 albumItemCover
    albumItemCoverLeave(index) {
        const DOMelement = document.getElementsByClassName('albumItemCover')[index];
        const { children } = DOMelement;
        children[0].style.transform = 'translate(120%,120%)';
        children[1].style.transform = 'translate(100%,-15%)';
        children[2].style.transform = 'translate(80%,-90%)';
    }

    // 渲染相册
    renderAlbumItem() {
        const { photoList } = this.state;
        return photoList.map((item, index) => {
            const { photos } = item;
            return <div className="albumItem" key={index}>
                {/* 相册集集合封面图片组 */}
                <div className='albumItemCover'
                    onMouseEnter={e => this.albumItemCoverHover(index)}
                    onMouseLeave={e => this.albumItemCoverLeave(index)}
                >
                    <div style={{ backgroundImage: `url(${photos[0].url})` }}></div>
                    <div style={{ backgroundImage: `url(${photos[1].url})` }}></div>
                    <div style={{ backgroundImage: `url(${photos[2].url})` }}></div>
                </div>

                {/* 相册集描述部分 */}
                <div
                    className='albumItemDes'
                    onClick={e=>e}
                >
                    <p>
                        {item.gatherTitle}
                    </p>
                    <span>{item.describle}</span>
                </div>
            </div>
        })
    }


    componentDidMount() {

    }


    // 相册集滑动
    scrollTopAnimate() {
        // 禁止滚下来的时候滚动鼠标滚轮,防止不能滚到底
        function prevent(e) {
            e.preventDefault();
        }
        document.body.addEventListener('wheel', prevent, { passive: false })

        // 先滚动相册集
        const albumContainer = document.getElementsByClassName('albumContainer')[0];
        albumContainer.style.top = 'calc(100vh)';

        // 滚下来轮播图
        let id = null;
        function scroll() {
            const top = window.scrollY;

            if (top > 0) {
                window.scrollTo(0, top - Math.min(top / 65) - 1);
                id = window.requestAnimationFrame(scroll);
            }

            if (top <= 0) {
                window.scrollTo(0, 0);
                // 清除动画
                cancelAnimationFrame(id);
                // 显示(隐藏)控件
                document.getElementsByClassName('downIconContainer')[0].className = 'downIconContainer';
                document.getElementsByClassName('XIcon')[0].className = 'XIcon displayNone';
                // 清楚禁止滚轮事件
                setTimeout(() => document.body.removeEventListener('wheel', prevent), 500);
            }
        }

        scroll();
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
                {this.renderAlbumItem()}
            </div>
        </div>
    }
}

export default Album;