import * as Yup from 'yup';

export const LoginFormSchemaValidation = Yup.object().shape({
    code: Yup.string().required('Ingresa tu código de usuario.'),
    password: Yup.string().min(8, 'Tu contraseña debe tener al menos 8 caracteres.')
        .required('Ingresa tu contraseña.'),
});
