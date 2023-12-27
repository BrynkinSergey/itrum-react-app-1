import styles from './style.module.scss'

interface IBrandHeaderProps {
  values: string[]
}

const BrandHeader = ({ values }: IBrandHeaderProps) => {
  return (
    <div className={styles.header}>
      {values.map((el, index) => <p key={`header-column-${index}`}>{el}</p>)}
    </div>
  )
}

export default BrandHeader
