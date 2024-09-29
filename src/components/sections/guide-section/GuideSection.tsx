import { FC } from 'react'
import { GuideData } from '../../../mock-data/mock-guide-data'
import Container from '../../common/container/Container.tsx'
import SectionHeader from '../../common/section-header/SectionHeader.tsx'
import styles from './GuideSection.module.sass'
import { useTranslation } from 'react-i18next'

const GuideSection: FC = () => {
  const { t } = useTranslation()
  return (
    <section>
      <Container>
        <div className={styles.wrapper}>
          <SectionHeader
            title={t('sections.guideSection.header.title')}
            subtitle={t('sections.guideSection.header.subtitle')}
          />
          <div className={styles.guideList}>
            {GuideData.map(({ id, icon, title, text }) => (
              <div key={id} className={styles.guideList__item}>
                <img className={styles.guideList__img} src={icon} alt={t(title)} />
                <div className={styles.guideList__info}>
                  <h4 className={styles.guideList__title}>{t(title)}</h4>
                  <p className={styles.guideList__text}>{t(text)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default GuideSection
