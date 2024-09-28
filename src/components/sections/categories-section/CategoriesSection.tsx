import { FC } from 'react'
import { categoriesData } from '../../../mock-data/mock-categories-data.ts'
import Container from '../../common/container/Container.tsx'
import styles from './CategoriesSection.module.sass'
import { useTranslation } from 'react-i18next'

const CategoriesSection: FC = () => {
  const { t } = useTranslation()
  return (
    <section>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>{t('sections.categoriesSection.header.title')}</h2>
          <div className={styles.categoriesList}>
            {categoriesData.map(({ id, label, img, icon }) => (
              <a key={id} className={styles.categoriesList__item} href="#">
                <div className={styles.categoriesList__imageContainer}>
                  <img className={styles.categoriesList__img} src={img} alt={label} />
                  <div className={styles.categoriesList__blurOverlay}></div>
                  <img src={icon} className={styles.categoriesList__icon} alt={label} />
                </div>
                <p className={styles.categoriesList__label}>{label}</p>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
export default CategoriesSection
