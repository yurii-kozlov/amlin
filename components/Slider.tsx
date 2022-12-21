/* eslint-disable max-len */
import { ReactElement } from 'react';
import styles from '../styles/container.module.scss';

export const Slider = () :ReactElement => (
  <div className={styles.container} >
    <div className="carousel slide" data-bs-ride="carousel" id="carouselExampleControls">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img alt="banner1" className="d-block w-100" src="https://res.cloudinary.com/dqdonqby4/image/upload/v1612461812/banners/big-banner-4_cxycmf.png"/>
        </div>
        <div className="carousel-item">
          <img alt="banner2" className="d-block w-100" src="https://res.cloudinary.com/docve4syp/image/upload/c_scale,h_328,w_1398/v1670924341/techstore/banner2_lmghir.png"/>
        </div>
        <div className="carousel-item">
          <img alt="banner3" className="d-block w-100" src="https://res.cloudinary.com/docve4syp/image/upload/c_scale,h_328,w_1398/v1670925885/techstore/banner3_teeand.png"/>
        </div>
      </div>
      <button className="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleControls" type="button">
        <span aria-hidden="true" className="carousel-control-prev-icon" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleControls" type="button">
        <span aria-hidden="true" className="carousel-control-next-icon" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
)