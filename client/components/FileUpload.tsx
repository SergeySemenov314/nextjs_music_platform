import React, { useRef } from "react";

interface FileUploadProps {
    setFile: Function;
    children: React.ReactNode;
    accept: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ setFile, accept, children }) => {
    const ref = useRef<HTMLInputElement>()

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files)

        setFile(e.target.files[0])
    }

    return (
        <div onClick={() => ref.current.click()}>
            <input
                type="file"
                accept={accept}
                style={{ display: 'none' }}
                ref={ref}
                onChange = {onChangeInput}
            />
            {children}
        </div>
    );
};

export default FileUpload;
