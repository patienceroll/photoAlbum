import React from 'react';
import ReactDOM from 'react-dom';

// 样式
import './index.css';

// svg图片
import { Arrow } from './assets/icon(componenty)/icon.js';



class Swiper extends React.Component {
    state = {
        list: [
            {
                imgSrc: '',
                content: '',
                index: 0
            },
            {
                imgSrc: '',
                content: '',
                index: 1
            },
            {
                imgSrc: '',
                content: '',
                index: 2
            },
            {
                imgSrc: '',
                content: '',
                index: 2
            },
            {
                imgSrc: '',
                content: '',
                index: 2
            }
        ],
        currentSwiperItem: 1

    }


    // 渲染轮播图内容
    renderSwiperContent() {
        const { list,currentSwiperItem } = this.state;
        return list.map((item, index) => <div
            className={currentSwiperItem === index + 1?'swiperContentItem':'swiperContentItem transform'}
            style={{
                width: `${0.8 / list.length * 100}%`,
                marginLeft: `${0.1 / list.length * 100}%`
            }}
            key={index}
        >
            <img alt='轮播图片' />
            <p></p>
        </div>)
    }

    // 
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
            await this.setState({ currentSwiperItem: currentSwiperItem !== listLength ? currentSwiperItem + 1 : listLength});
            
        }
        // 这里用到 this.state.currentSwiperItem 的原因是虽然更新了state的参数，但当前作用域下的参数并没有改变
        swiperContent.style.transform = `translate(-${0.9 * width * (this.state.currentSwiperItem - 1)}px,-50%)`;
    }

    render() {
        const { list } = this.state;
        return <div className='swiper'>

            {/* 轮播图控件 */}
            <div
                className='letfArrow'
                onClick={e => this.slideSwiper(e, 'left')}
            >
                {/* 以下的div盒子避免点击到svg里面的内容 */}
                <div className='arrowShield'></div>

                {Arrow({ color: '#CCCCFF', height: 'inherit', width: 'inherit' })}

            </div>

            <div
                className='rightArrow'
                onClick={e => this.slideSwiper(e, 'right')}
            >
                {/* 以下的div盒子避免点击到svg里面的内容 */}
                <div className='arrowShield'></div>
                {Arrow({ color: '#CCCCFF', height: 'inherit', width: 'inherit' })}
            </div>


            {/* 轮播图内容 */}
            <div className='swiperContent' style={{ width: `${list.length * 100}%` }}>
                {this.renderSwiperContent()}
            </div>
        </div>
    }
}


class Index extends React.Component {
    render() {
        return <div className='container'>
            <Swiper></Swiper>
        </div>
    }
}



ReactDOM.render(<Index />, document.getElementById('root'));
