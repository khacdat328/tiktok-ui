import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as Popper } from '../Popper';
import styles from './Video.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faHeart, faMusic, faShare, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';

const cx = classNames.bind(styles);
function Video() {
   return (
      <div className={cx('wrapper')}>
         <img
            className={cx('avatar')}
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ff6cfa684d7eb1c00409c4214d8ab62f~c5_100x100.jpeg?x-expires=1677128400&x-signature=Foaoi2u4H9UE6vR1a3Ni1JPMdhE%3D"
            alt=""
         />
         <div className={cx('content')}>
            <div className={cx('text-content')}>
               <div className={cx('author')}>
                  <h3 className={cx('nickname')}>Chau Khac Dat</h3>
                  <h4 className={cx('username')}>Khacdat1211</h4>
               </div>
               <div className={cx('description')}>
                  <span className={cx('description-content')}>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit adipisicing elit
                  </span>
                  <a href="/#" className={cx('hashtag')}>
                     #abcd
                  </a>
                  <a href="/#" className={cx('hashtag')}>
                     #assss
                  </a>
               </div>
               <div className={cx('music')}>
                  <FontAwesomeIcon icon={faMusic} />
                  <a href="/#"> Nhạc nền - Chí Khang</a>
               </div>
               <Button type="outline" size="small" className={cx('follow-btn')}>
                  Follow
               </Button>
            </div>
            <div className={cx('video')}>
               <div className={cx('video-item')}>
                  <video
                     src="https://files.fullstack.edu.vn/f8-tiktok/videos/1658-63f0d78917bf8.mp4"
                     controls
                     loop
                     muted
                     playsInline
                     style={{ width: '286px' }}
                  ></video>
               </div>
               <div className={cx('action')}>
                  <button className={cx('interact-btn')}>
                     <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faHeart} />
                     </span>
                     <strong className={cx('number')}>44</strong>
                  </button>
                  <button className={cx('interact-btn')}>
                     <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faCommentDots} />
                     </span>
                     <strong className={cx('number')}>44</strong>
                  </button>
                  <button className={cx('interact-btn')}>
                     <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faShare} />
                     </span>
                     <strong className={cx('number')}>44</strong>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Video;
