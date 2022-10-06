import { Modal as AntdModal } from "antd/lib";
import { ModalProps } from "./type";

export default function Modal({
  children,
  isModalVisible,
  onCancel,
  className,
  ...rest
}: ModalProps): JSX.Element {
  console.log(isModalVisible, 'nnnn');

  return (
    <AntdModal
      className={className}
      open={isModalVisible}
      onCancel={onCancel}
      footer={null}
      {...rest}
    >
      {children}
    </AntdModal>
  );
}
