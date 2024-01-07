import React from 'react';
import ReactDOM from 'react-dom/client';
import ConfirmModal, { ConfirmModalProps } from './components/ConfirmModal';

type Props = Omit<ConfirmModalProps, 'onClose'>;
const confirm = (props?: Props) => {
  return new Promise<boolean>((resolve) => {
    let el: HTMLElement | null = document.createElement('div');
    const root = ReactDOM.createRoot(el);
    const handleResolve = (result: boolean) => {
      root.unmount();
      el = null;
      resolve(result);
    };

    root.render(<ConfirmModal {...props} onClose={handleResolve} />);
  });
};

export default confirm;
