import { useState } from 'react';
import { addToast } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import type { FormikHelpers } from 'formik';
import type { LoginFormInterface } from '@/interfaces';
import { LoginEnums } from '../../enums';

export const useLoginFormController = () => {

    const router = useRouter();

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleSubmitLoginForm = async ({ code, password }: LoginFormInterface, { setSubmitting, setErrors }: FormikHelpers<LoginFormInterface>) => {

        const trimmedFormValues = {
            code: code.trim(),
            password: password.trim()
        };

        const responseLogin = await signIn('credentials', {
            ...trimmedFormValues,
            redirect: false,
        });

        if (responseLogin?.error) {
            setErrors({
                code: LoginEnums.INCORRECT_CODE,
                password: LoginEnums.INCORRECT_PASSWORD
            });
            setSubmitting(false);

            addToast({
                title: LoginEnums.TITLE_LOGIN_ERROR,
                description: LoginEnums.CREDENTIALS_ERROR,
                color: 'danger',
                shadow: 'sm',
                variant: 'solid',
                radius: 'sm',
                size: 'sm'
            });
            return;
        }
        setSubmitting(false);

        router.replace('/');
    };

    return {
        //* Properties
        showPassword,

        //* Methods
        handleSubmitLoginForm,
        setShowPassword
    };
};
