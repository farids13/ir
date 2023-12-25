import React, { FC, ReactNode } from 'react';

interface ErrorTextProps {
    styleClass: string;
    children: ReactNode;
}

const ErrorText: FC<ErrorTextProps> = ({ styleClass, children }) => {
    return (
        <p className={`text-center  text-error ${styleClass}`}>{children}</p>
    );
}

export default ErrorText;