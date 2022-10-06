import { ModalButtonTextEnum } from '../../../constants/enum'
import Modal from '../modal'
import { WarningModalProps } from './type'

import styles from './warning.module.scss'

export const WarningModal = ({ onCancel, onAccept, visible, messageTitle, }: WarningModalProps): JSX.Element => {
    return (
        <Modal
            closable={false}
            className={styles.modalAntd}
            isModalVisible={visible}
            onCancel={onCancel}
        >
            <div className={styles.container}>
                <div className={styles.closeModal}>
                    <button className={styles.buttonClose} onClick={onCancel}>
                        &times;
                    </button>
                </div>
                <div className={styles.text}>
                    <span>{messageTitle}</span>
                </div>
                <div className={styles.modalButton}>
                    <button className={styles.cancel} onClick={onCancel}>
                        {ModalButtonTextEnum.CANCEL}
                    </button>
                    <button className={styles.delete} onClick={onAccept}>
                        {ModalButtonTextEnum.YES}
                    </button>
                </div>
            </div>
        </Modal>
    )
}
