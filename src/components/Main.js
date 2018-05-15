require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

// 获取图片相关数据并利用自执行函数，将图片名信息转成图片URL路径信息
let imageDatas = require('../data/imageDatas.json');

imageDatas = (function getImageURL(imageDataArr) {
    for (let i = 0, j = imageDataArr.length; i < j; i++) {
      let singleImageData = imageDataArr[i];

      singleImageData.imageURL = require('../images/' + singleImageData.fileName);

      imageDataArr[i] = singleImageData;
    }

    return imageDataArr;
})(imageDatas);


class AppComponent extends React.Component {
  render() {
    return (
        <section className="stage">
          <section className="img-sec">

          </section>
          <nav className="controller-nav">

          </nav>
        </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
