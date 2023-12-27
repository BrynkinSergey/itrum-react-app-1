import { type ChangeEvent, useRef } from 'react'

import styles from './style.module.scss'

import { ReactComponent as AttachmentIcon } from '../../../../../../images/icons/attachment-icon.svg'

interface IAttachmentButtonProps {
  handleFile: (file: File) => void
}

const AttachmentButton = ({ handleFile }: IAttachmentButtonProps) => {
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
    <>
      <button className={styles.editImageLayout} onClick={handleClick}>
        <AttachmentIcon className={styles.attachmentIcon}/>
      </button>
      <input
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{ display: 'none' }} // Make the file input element invisible
      />
    </>
  )
}

export default AttachmentButton
