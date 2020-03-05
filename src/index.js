import React from 'react';
import ReactDOM from 'react-dom';

// 样式
import './index.css';
// 测试用的图片资源
import bgi from './bgis.js';

import './animate/animate.css';

// svg图片
import { Arrow, XIcon, Down } from './assets/icon(componenty)/icon.js';

const ref = React.createRef();


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

    // 相册集滑动
    scrollTopAnimate() {
        // 先滚动album 到顶部
        ref.current.style.top = 'calc(100vh)';

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
            ref={ref}
            onClick={e => this.scrollTopAnimate()}
        >
            <h1 style={{ color: '#fff', backgroundColor: 'rgba(0,0,0,0.5)' }}>此页面用来展示每个相册合集里面的相片.</h1>
            <div>{XIcon({ color: '#fff' })}</div>
        </div>
    }
}

class Swiper extends React.Component {
    state = {
        // 此数据以后用服务器传送
        list: [
            {
                imgSrc: bgi.bgi1,
                content: '时光',
                titlePositon: 'rightBottom'
            },
            {
                imgSrc: bgi.bgi2,
                content: '旅行',
                titlePositon: 'leftTop'
            },
            {
                imgSrc: bgi.bgi3,
                content: '音乐梦',
                titlePositon: 'rightBottom'
            },
            {
                imgSrc: bgi.bgi2,
                content: '厨之旅',
                titlePositon: 'rightTop',
            },
            {
                imgSrc: bgi.bgi1,
                content: '她和他',
                titlePositon: 'leftBottom'
            }
        ],
        currentSwiperItem: 1
    }

    // 返回集合标题的位置类名


    // 渲染轮播图内容
    renderSwiperContent() {
        const { list, currentSwiperItem } = this.state;
        return list.map((item, index) => <div
            className={currentSwiperItem === index + 1 ? 'swiperContentItem' : 'swiperContentItem transform'}
            style={{
                width: `${0.8 / list.length * 100}%`,
                marginLeft: `${0.1 / list.length * 100}%`
            }}
            key={index}
            onClick={e => {
                ref.current.style.top = '0';
                document.getElementsByClassName('downIconContainer')[0].className = 'downIconContainer displayNone';
            }}
        >
            <div style={{ backgroundImage: `url(${item.imgSrc})` }} ></div>
            <p className={item.titlePositon}>{item.content}</p>
        </div>)
    }

    // 滑动轮播图
    async slideSwiper(e, direction) {
        const { target } = e;
        const { currentSwiperItem, list } = this.state;
        const listLength = list.length;

        // 选中 swiperContent 这个 dom。
        const swiperContent = target.parentNode.parentNode.children[2];
        // 计算出每个item的宽度
        const width = swiperContent.clientWidth / listLength;

        if (direction === 'left') {
            await this.setState({ currentSwiperItem: currentSwiperItem !== 1 ? currentSwiperItem - 1 : 1 });
        }
        if (direction === 'right') {
            await this.setState({ currentSwiperItem: currentSwiperItem !== listLength ? currentSwiperItem + 1 : listLength });

        }
        // 这里用到 this.state.currentSwiperItem 的原因是虽然更新了state的参数，但当前作用域下的参数并没有改变
        swiperContent.style.transform = `translate(-${0.9 * width * (this.state.currentSwiperItem - 1)}px,-50%)`;
    }

    render() {
        const { list } = this.state;
        return <div
            className='swiper'
        >

            {/* 轮播图控件 */}
            <div
                className='letfArrow'
                onClick={e => this.slideSwiper(e, 'left')}
            >
                {/* 以下的div盒子避免点击到svg里面的内容 */}
                <div className='arrowShield'></div>

                {Arrow({ color: '#fff', height: 'inherit', width: 'inherit' })}
            </div>

            <div
                className='rightArrow'
                onClick={e => this.slideSwiper(e, 'right')}
            >
                {/* 以下的div盒子避免点击到svg里面的内容 */}
                <div className='arrowShield'></div>
                {Arrow({ color: '#fff', height: 'inherit', width: 'inherit' })}
            </div>


            {/* 轮播图内容 */}
            <div className='swiperContent' style={{ width: `${list.length * 100}%` }}>
                {this.renderSwiperContent()}
            </div>

        </div>
    }
}

class Index extends React.Component {

    componentDidMount() {


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
                    onClick={e => {
                        ref.current.style.top = '0';
                        document.getElementsByClassName('downIconContainer')[0].className = 'downIconContainer displayNone';
                    }}
                >
                    {Down({ color: '#fff' })}
                </div>

            {/* 相册部分 */}
            <Album></Album>
        </>
    }
}



ReactDOM.render(<Index />, document.getElementById('root'));
