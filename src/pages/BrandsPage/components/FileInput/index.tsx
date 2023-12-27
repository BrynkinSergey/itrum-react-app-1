import styles from './style.module.scss'

import { type ChangeEvent, useRef } from 'react'
import { CustomInput } from '../../../../components'

import { ReactComponent as AttachmentIcon } from '../../../../images/icons/attachment-icon.svg'

interface IFileInputProps {
  handleFile: (file: File) => void
  fileName: string
}

const FileInput = ({
  handleFile = () => {
  },
  fileName
}: IFileInputProps) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click()
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const fileUploaded = event.target.files[0]
      if (fileUploaded) {
        handleFile(fileUploaded)
      }
    }
  }
  return (
    <div className={styles.fileInputWrapper}>
      <CustomInput isDisabled={true} placeholder={'Загрузите логотип бренда'} isFullWidth={true} type={'text'}
                   value={fileName}/>
      <button className={styles.button} onClick={handleClick}>
        <AttachmentIcon/>
      </button>
      <input
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{ display: 'none' }}
      />
    </div>
  )
}

export default FileInput
