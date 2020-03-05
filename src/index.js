import React from 'react';
import ReactDOM from 'react-dom';

// 样式
import './index.css';
import './animate/animate.css';

// svg图片
import { Down } from './assets/icon(componenty)/icon.js';

import Swiper from './page/swiper';
import Album from './page/album';


class Index extends React.Component {

    componentDidMount() {
        // 选中 albumContainer 这个元素保存到类里面,因为不同组件之间都会改变这个元素,所以不采用 ref
        this.albumContainer = document.getElementsByClassName('albumContainer')[0];

        this.DOMAction();
    }

    // 页面加载完成后的DOM操作
    DOMAction() {
        // 禁止滚轮在轮播图页滚动
        document.getElementsByClassName('swiperContainer')[0].addEventListener('wheel', function (e) {
            e.preventDefault()
        }, { passive: false })

        // 判断是否显示屏幕旋转提示
        window.onresize = function () {
            const tips = document.getElementsByClassName('tips')[0];
            if (document.documentElement.clientWidth <= 900) {
                tips.style.display = 'block';
                setTimeout(() => {
                    tips.style.display = 'none';
                }, 10000);
            }
        }

        // 挂载时媒体查询屏幕小于 900px ,则 10 秒后隐藏 tips
        setTimeout(() => {
            document.getElementsByClassName('tips')[0].style.display = 'none';
        }, 10000);
    }

    // 滑动出相册
    showPhotoAlbum() {
        this.albumContainer.style.top = '0';
        document.getElementsByClassName('downIconContainer')[0].className = 'downIconContainer displayNone';
        document.getElementsByClassName('XIcon')[0].className = 'XIcon';
    }

    render() {
        return <>
            {/* 轮播图部分 */}
            <div className='swiperContainer'>

                <p className='tips'>竖屏设备请横屏吧,体验更佳 ^-^</p>

                <Swiper></Swiper>
            </div>

            {/* 下箭头 */}
            <div
                className='downIconContainer'
                onClick={e => this.showPhotoAlbum()}
            >
                {Down({ color: '#fff' })}
            </div>

            {/* 相册部分 */}
            <Album ></Album>
        </>
    }
}



ReactDOM.render(<Index />, document.getElementById('root'));
