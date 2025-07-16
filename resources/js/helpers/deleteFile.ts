
interface DeleteFileProps {
    setFileName: React.Dispatch<React.SetStateAction<string>>
    fileInputRef: React.RefObject<HTMLInputElement | null>
    setData: (key: string, value: string) => void
}

export const deleteFile = ({setFileName, fileInputRef, setData}: DeleteFileProps) => {
    setFileName('');

    if (fileInputRef.current) {
        fileInputRef.current.value = '';

        setData('file', '');
    }
};
