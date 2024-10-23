import { FC } from 'react'
import { useGuideData } from '../../mock-data/mock-guide-data'
import Container from '../container/Container.tsx'
import SectionHeader from '../section-header/SectionHeader.tsx'
import styles from './GuideSection.module.sass'
import { useTranslation } from 'react-i18next'
import { Guide } from '../../../types/data'

const GuideSection: FC = () => {
  const { t } = useTranslation()
  const GuideData: Guide[] = useGuideData()
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
