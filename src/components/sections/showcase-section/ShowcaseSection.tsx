import { FC } from 'react'
import { EyeIcon } from '../../../assets/icons'
import { showcaseData } from '../../../mock-data/mock-showcase-data'
import Button from '../../common/button/Button'
import Container from '../../common/container/Container.tsx'
import SectionHeader from '../../common/section-header/SectionHeader.tsx'
import styles from './ShowcaseSection.module.sass'
import { useTranslation } from 'react-i18next'

const ShowcaseSection: FC = () => {
  const { t } = useTranslation()
  return (
    <section>
      <Container>
        <div className={styles.wrapper}>
          <SectionHeader
            title={t('sections.showcaseSection.header.title')}
            subtitle={t('sections.showcaseSection.header.subtitle')}
          />
          <div className={styles.showcaseList}>
            {showcaseData.map(({ id, img, title, icon, username, price, highestBid }) => (
              <div key={id} className={styles.showcaseList__item}>
                <img className={styles.showcaseList__img} src={img} alt={title} />
                <div className={styles.showcaseList__info}>
                  <h4 className={styles.showcaseList__title}>{title}</h4>
                  <div className={styles.showcaseList__user}>
                    <img className={styles.showcaseList__userIcon} src={icon} alt={username} />
                    <span className={styles.showcaseList__userLabel}>{username}</span>
                  </div>
                  <div className={styles.сostWrapper}>
                    <div className={styles.сostWrapper__price}>
                      <p className={styles.сostWrapper__label}>{t('sections.showcaseSection.cardInfo.price')}</p>
                      <p className={styles.сostWrapper__value}>{price}</p>
                    </div>
                    <div className={styles.сostWrapper__highestBid}>
                      <p className={styles.сostWrapper__labelRight}>
                        {t('sections.showcaseSection.cardInfo.highestBid')}
                      </p>
                      <p className={styles.сostWrapper__value}>{highestBid}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.buttonCenter}>
            <Button icon={EyeIcon} text={t('sections.showcaseSection.buttonText')} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ShowcaseSection
