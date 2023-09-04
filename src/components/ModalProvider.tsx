import React, { ComponentType, ReactNode, useCallback, useMemo, useRef } from "react";
import ConfirmDialog, { ConfirmDialogProps } from "./ConfirmDialog";

const ModalStack = () => {
  const { modalStack } = React.useContext<ModalState>(ModalContext);
  return (
    <React.Fragment>
      <React.Suspense fallback={<></>}>
        {modalStack.map((modalInstance, index) => (
          <React.Fragment key={index}>{modalInstance.component}</React.Fragment>
        ))}
      </React.Suspense>
    </React.Fragment>
  );
};

export interface ModalInstance {
  component: ReactNode;
  resolve: (result: any) => Promise<any | undefined> | void;
  reject: (reason: any) => Promise<any | undefined> | void;
}

export interface ModalRef {
  modalInstance: React.ReactElement;
  result: Promise<any>;
}

export interface ModalState {
  openModal: (content: ComponentType<any>, data?: any) => ModalRef;
  closeModal: (result?: any) => Promise<any | undefined> | void;
  dismissModal: (reason?: any) => void;
  confirm: (options?: ConfirmDialogProps, resolve?: (data?: any) => Promise<any | undefined> | void) => ModalRef;
  modalStack: ModalInstance[];
  closeAllModal: () => void;
}

const initState = {} as ModalState;

const ModalContext = React.createContext<ModalState>(initState);
const { Provider } = ModalContext;

const ModalProvider = ({ children }: any) => {
  const refModalStack = useRef<ModalInstance[]>([]);
  const [modalStack, setModalStack] = React.useState<ModalInstance[]>([]);

  const closeAllModal = useCallback(() => {
    setModalStack([]);
  }, [])

  const openModal = useCallback((content: ReactNode, data?: any): ModalRef => {
    const ContentComponent = content as ComponentType;
    let resolve: any;
    let reject: any;
    const resultPromise = new Promise((resolutionFunc, rejectFunc) => {
      resolve = resolutionFunc;
      reject = rejectFunc;
    });
    setModalStack((prev) => {
      refModalStack.current = prev.concat([
        {
          component: <ContentComponent {...data} />,
          resolve: resolve,
          reject: reject,
        },
      ]);
      return refModalStack.current;
    });
    return {
      modalInstance: <ContentComponent {...data} />,
      result: resultPromise,
    };
  }, []);

  const confirm = useCallback(
    (options?: ConfirmDialogProps, _resolve?: (result: any) => Promise<any | undefined> | void): ModalRef => {
      let resolve: any;
      let reject: any;
      const resultPromise = new Promise((resolutionFunc, rejectFunc) => {
        resolve = _resolve ? _resolve : resolutionFunc;
        reject = rejectFunc;
      });
      setModalStack((prev) => {
        refModalStack.current = prev.concat([
          {
            component: <ConfirmDialog {...(options as any)} />,
            resolve: resolve,
            reject: reject,
          },
        ]);
        return refModalStack.current;
      });
      return {
        modalInstance: <ConfirmDialog {...(options as any)} />,
        result: resultPromise,
      };
    },
    []
  );

  const closeModal = useCallback(async (result?: any) => {
    let _modalStack = [...refModalStack.current];
    const instance = _modalStack.pop();
    refModalStack.current = _modalStack;
    await instance?.resolve?.(result);
    setModalStack(_modalStack);
  }, []);

  const dismissModal = useCallback(async (reason: any) => {
    let _modalStack = [...refModalStack.current];
    const instance = _modalStack.pop();
    refModalStack.current = _modalStack;
    await instance?.reject?.(reason);
    setModalStack(_modalStack);
  }, []);

  const valueProvider = useMemo<ModalState>(
    () => ({
      openModal,
      closeModal,
      dismissModal,
      modalStack,
      confirm,
      closeAllModal
    }),
    [openModal, closeModal, dismissModal, confirm, modalStack, closeAllModal]
  );

  return (
    <Provider value={valueProvider}>
      <ModalStack />
      {children}
    </Provider>
  );
};

const useModal = () => {
  const { openModal, closeModal, dismissModal, confirm, modalStack, closeAllModal } = React.useContext<ModalState>(ModalContext);

  return { openModal, closeModal, dismissModal, confirm, modalStack, closeAllModal };
};

export { ModalContext, useModal, ModalProvider };
