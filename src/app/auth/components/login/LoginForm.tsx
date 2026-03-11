'use client';

import {
    PiEyeClosed,
    PiEyeBold
} from 'react-icons/pi';
import {
    MdOutlineMailOutline,
    MdOutlineWhatsapp
} from 'react-icons/md';
import {
    Button,
    Checkbox,
    Input,
    Link
} from '@heroui/react';
import clsx from 'clsx';
import {
    FieldProps,
    Field,
    Form,
    Formik
} from 'formik';
import { useLoginFormController } from '../../hooks';
import { LoginFormSchemaValidation } from '../../helpers';
import { LoginEnums } from '../../enums';

export const LoginForm = () => {

    const {
        showPassword,

        handleSubmitLoginForm,
        setShowPassword
    } = useLoginFormController();

    return (
        <>
            <Formik
                initialValues={{ code: '', password: '' }}
                validationSchema={LoginFormSchemaValidation}
                onSubmit={handleSubmitLoginForm}
            >
                {({ submitCount, errors, isSubmitting }) => (
                    <Form
                        className="flex flex-col gap-3"
                        autoComplete="off"
                        noValidate
                    >
                        <Field
                            name="code"
                        >
                            {({ field }: FieldProps<string>) => (
                                <Input
                                    {...field}
                                    isRequired
                                    label={LoginEnums.CODE_LABEL}
                                    type="text"
                                    variant="bordered"
                                    isInvalid={submitCount > 0 && !!errors.code}
                                    errorMessage={submitCount > 0 && errors.code}
                                />
                            )}
                        </Field>

                        <Field
                            name="password">
                            {({ field }: FieldProps<string>) => (
                                <Input
                                    {...field}
                                    isRequired
                                    endContent={
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className={clsx('cursor-pointer ', {
                                                'text-button-error': submitCount > 0 && !!errors.password,
                                                'text-fontText-200/40 hover:text-fontText-100/60': !submitCount || !errors.password
                                            })}
                                        >
                                            {!showPassword
                                                ? <PiEyeBold size={25} />
                                                : <PiEyeClosed size={25} />
                                            }
                                        </button>
                                    }
                                    label={LoginEnums.PASSWORD_LABEL}
                                    type={showPassword ? "text" : "password"}
                                    variant="bordered"
                                    isInvalid={submitCount > 0 && !!errors.password}
                                    errorMessage={submitCount > 0 && errors.password}
                                />
                            )}
                        </Field>

                        <div className="flex items-center justify-between w-full px-1 py-2">
                            <Checkbox
                                name="remember"
                                size="sm"
                                color="primary"
                                disabled={isSubmitting}
                            >
                                <span className="text-xs">
                                    {LoginEnums.REMEMBER_ME}
                                </span>
                            </Checkbox>
                            <Link
                                className="text-xs"
                                href="#"
                                isBlock
                                showAnchorIcon
                                size="sm"
                                color="primary"
                            >
                                {LoginEnums.FORGOT_PASSWORD}
                            </Link>
                        </div>
                        <Button
                            type="submit"
                            variant="shadow"
                            color="primary"
                            isLoading={isSubmitting}
                            disabled={isSubmitting}
                            className="w-full font-bold uppercase text-background"
                        >
                            {LoginEnums.ENTER}
                        </Button>
                    </Form>
                )}
            </Formik>

            <p className="text-sm font-medium text-center text-fontText-100">
                {LoginEnums.NEED_HELP}
            </p>

            <div className="flex items-center justify-between w-full text-xs select-text">
                <Link
                    className="flex items-center gap-2 text-xs"
                    href="#"
                    isBlock
                    size="sm"
                    color="primary"
                >
                    <MdOutlineMailOutline size={20} />
                    {LoginEnums.CONTACT_SUPPORT}
                </Link>

                <Link
                    className="flex items-center gap-2 text-xs"
                    href="#"
                    isBlock
                    size="sm"
                    color="primary"
                >
                    <MdOutlineWhatsapp size={20} />
                    {LoginEnums.CONTACT_PHONE}
                </Link>
            </div>
        </>
    );
};
