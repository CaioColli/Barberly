import { useEffect, useRef } from "react";

interface ModalProps {
    onOpen: boolean,
    onClose: () => void,
    modalTitle: string,
    children: React.ReactNode
}

const FormModal = ({ onOpen, onClose, modalTitle, children }: ModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (onOpen === true) {
            const handleClickOutside = (event: MouseEvent) => {
                if (!modalRef.current?.contains(event.target as Node)) {
                    onClose();
                }
            }

            document.addEventListener('mousedown', handleClickOutside);

            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            }
        }
    }, [onClose]);

    return (
        <>
            {onOpen && (
                <div className="bg-primary rounded-t-2xl absolute w-full pt-12 pb-12 pr-6 pl-6 bottom-0" ref={modalRef}>
                    <h1 className="mb-8 text-secondary text-[32px]">{modalTitle}</h1>
                    {children}
                </div>
            )}
        </>
    )
}

export default FormModal;