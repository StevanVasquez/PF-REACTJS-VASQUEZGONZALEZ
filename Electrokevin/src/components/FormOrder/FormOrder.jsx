import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { MdInsertEmoticon } from 'react-icons/md'
import { Link } from 'react-router-dom'
import './FormOrder.scss'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'


const schema = Yup.object().shape({
    nombre: Yup.string()
            .min(3, "El nombre es demasiado corto")
            .max(40, "Máximo 20 caracteres")
            .required("Este campo es obligatorio"),

    direccion: Yup.string()
            .min(4, "La direccion es demasiado corta")
            .max(50, "Máximo 30 caracteres")
            .required("Este campo es obligatorio"),

    email: Yup.string()
            .required("Este campo es obligatorio")
            .email("El email es inválido"),

    telefono: Yup.string()
            .min(1, "El numero de telefono es demasiado corto")
            .max(14, "Máximo 14 numeros")
            .required("Este campo es obligatorio"),

    ciudad: Yup.string()
            .min(1, "La ciudad es demasiada corta")
            .max(40, "Máximo 40 caracteres")
            .required("Este campo es obligatorio"),        
})


const FormOrder = () => {

    const { cart, totalCompra, vaciarCarrito} = useContext(CartContext);

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null);

    const handleSubmit = (values) => {
        setLoading(true)

        const orden = {
            cliente: values,
            items: cart.map(item => ({id: item.id, precio: item.precio, precio_total: item.precio * item.cantidad, cantidad: item.cantidad, name: item.name})),
            total: totalCompra(),
            fyh: new Date()
        }

        const ordersRef = collection(db, "ordenes")

        addDoc(ordersRef, orden)
            .then((doc) => {
                vaciarCarrito()
                setOrderId(doc.id);
            })

        setLoading(false)    
    }

    if (orderId) {
        return (
            <div className="container_principal_compra_completada">
                <div className="compra_completada">
                    <h2 className="compra_completada_title">Tu compra se completo exitosamente</h2>
                    <MdInsertEmoticon className="compra_completada_emoticon"/>
                </div>

                <div className="numero_orden">
                    <p className="orden_No">Tu orden No.<strong className="ref_orden">{orderId}</strong></p>
                </div>

                <div className="regresar_al_inicio">
                    <Link to="/" className="buton_regresar">Ir a inicio</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="container_principal_formulario">
            <div className="formulario_text">
                <h2 className="formulario_text">FORMULARIO</h2>
                <p className="formulario_description">Completar estos campos para realizar la compra:</p>
            </div>

            <Formik
                initialValues={{
                    nombre: '',
                    direccion: '',
                    email: '',
                    telefono: '',
                    ciudad: ''
                }}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                {() => (
                    <Form className="form_container">
                        <Field placeholder="Ingrese su nombre completo" className="form-control my-2 input_form" type="text" name="nombre"/>
                        <ErrorMessage name="nombre" component="p" className="aviso_validacion"/>
                        <Field placeholder="Ingrese la direccion de su residencia" className="form-control my-2 input_form" type="text" name="direccion"/>
                        <ErrorMessage name="direccion" component="p" className="aviso_validacion"/>
                        <Field  placeholder="Ingrese su correo electronico" className="form-control my-2 input_form" type="email" name="email"/>
                        <ErrorMessage name="email" component="p" className="aviso_validacion"/>
                        <Field  placeholder="Ingrese su telefono celular" className="form-control my-2 input_form" type="telefono" name="telefono"/>
                        <ErrorMessage name="telefono" component="p" className="aviso_validacion"/>
                        <Field  placeholder="Ingrese la ciudad de residencia" className="form-control my-2 input_form" type="text" name="ciudad"/>
                        <ErrorMessage name="ciudad" component="p" className="aviso_validacion"/>

                        <div className="submit_enviar_datos">
                            <button className="boton_enviar_datos" disabled={loading}>Enviar informacion</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
    
}

export default FormOrder