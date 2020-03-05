import React from 'react';

// 测试用的图片资源
import bgi from './bgis.js';

import { Arrow } from '../../assets/icon(componenty)/icon.js';

import './index.css';


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

    // 滑动出相册
    showPhotoAlbum() {
        this.albumContainer.style.top = '0';
        document.getElementsByClassName('downIconContainer')[0].className = 'downIconContainer displayNone';
        document.getElementsByClassName('XIcon')[0].className = 'XIcon';
    }


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
            onClick={e => this.showPhotoAlbum()}
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

    componentDidMount() {
        this.albumContainer = document.getElementsByClassName('albumContainer')[0];
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

export default Swiper;