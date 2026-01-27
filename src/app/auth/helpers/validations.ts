import * as Yup from 'yup';

export const LoginFormSchemaValidation = Yup.object().shape({
    code: Yup.string().required('Ingresa tu código de usuario.'),
    password: Yup.string().required('Ingresa tu contraseña.'),
});
