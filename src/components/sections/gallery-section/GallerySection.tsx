import { FC } from 'react'
import { galleryData } from '../../../mock-data/mock-gallery-data'
import Container from '../../common/container/Container.tsx'
import SectionHeader from '../../common/section-header/SectionHeader.tsx'
import styles from './GallerySection.module.sass'

const GallerySection: FC = () => (
  <section>
    <Container>
      <div className={styles.wrapper}>
        <SectionHeader title="Trending Collection" subtitle="Checkout our weekly updated trending collection." />
        <div className={styles.galleryList}>
          {galleryData.map(({ id, mainImg, miniImgs, title, username, userIcon }) => (
            <div key={id} className={styles.galleryList__item}>
              <img src={mainImg} className={styles.galleryList__mainImg} alt={title} />
              <div className={styles.galleryList__images}>
                {miniImgs.map((miniImg, idx) => (
                  <img key={idx} src={miniImg} className={styles.galleryList__miniImg} alt={title} />
                ))}
                <a href="#" className={styles.galleryList__link}>
                  1025+
                </a>
              </div>
              <div className={styles.galleryList__info}>
                <h4 className={styles.galleryList__title}>{title}</h4>
                <p className={styles.galleryList__username}>
                  <img src={userIcon} className={styles.galleryList__userIcon} alt={username} />
                  <span className={styles.galleryList__userLabel}>{username}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>
)

export default GallerySection
