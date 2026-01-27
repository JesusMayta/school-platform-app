import { useState } from 'react';

export const useLoginFormController = () => {

    const [showPassword, setShowPassword] = useState<boolean>(false);

    return {
        //* Properties
        showPassword,

        //* Methods
        setShowPassword
    };
};
