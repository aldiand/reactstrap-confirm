import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

type buttonsComponentProps = {
  onClose: (result: boolean) => void;
};
export type ConfirmModalProps = {
  onClose: (result: boolean) => void;
  message?: React.ReactNode;
  title?: React.ReactNode;
  confirmText?: React.ReactNode;
  cancelText?: React.ReactNode;
  confirmColor?: string;
  cancelColor?: string;
  className?: string;
  size?: string;
  buttonsComponent?: (props: buttonsComponentProps) => React.ReactNode;
  bodyComponent?: (props: any) => React.ReactNode;
  modalProps?: React.ComponentProps<typeof Modal>;
  children?: React.ReactNode;
};
const ConfirmModal = ({
  onClose,
  message,
  title,
  confirmText,
  cancelText,
  confirmColor,
  cancelColor,
  className,
  buttonsComponent,
  size,
  bodyComponent,
  modalProps,
}: ConfirmModalProps) => {
  let buttonsContent = (
    <>
      {cancelText && (
        <Button color={cancelColor} onClick={() => onClose(false)}>
          {cancelText}
        </Button>
      )}{' '}
      <Button color={confirmColor} onClick={() => onClose(true)}>
        {confirmText}
      </Button>
    </>
  );

  if (buttonsComponent) {
    const CustomComponent = buttonsComponent;
    buttonsContent = <CustomComponent onClose={onClose} />;
  }

  let BodyComponent = bodyComponent as any;

  return (
    <Modal
      size={size}
      isOpen
      toggle={() => onClose(false)}
      className={`reactstrap-confirm ${className}`}
      {...modalProps}
    >
      {title && (
        <ModalHeader toggle={() => onClose(false)}>{title || null}</ModalHeader>
      )}
      <ModalBody>{bodyComponent ? <BodyComponent /> : message}</ModalBody>
      <ModalFooter>{buttonsContent}</ModalFooter>
    </Modal>
  );
};

ConfirmModal.defaultProps = {
  message: 'Are you sure?',
  title: 'Warning!',
  confirmText: 'Ok',
  cancelText: 'Cancel',
  confirmColor: 'primary',
  cancelColor: '',
  className: '',
  buttonsComponent: null,
  size: null,
  bodyComponent: null,
  modalProps: {},
};

ConfirmModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  message: PropTypes.node,
  title: PropTypes.node,
  confirmText: PropTypes.node,
  cancelText: PropTypes.node,
  confirmColor: PropTypes.string,
  cancelColor: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  buttonsComponent: PropTypes.func,
  bodyComponent: PropTypes.func,
  modalProps: PropTypes.object,
};

export default ConfirmModal;
