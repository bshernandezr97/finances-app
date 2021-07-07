import React from 'react'
import { useDispatch } from 'react-redux'
import { TaxesForm } from '../components/taxes/TaxesForm'
import { TaxesList } from '../components/taxes/TaxesList'
import { showTaxFormModal } from '../redux/actions/ui'

export const TaxesScreen = () => {

    const dispatch = useDispatch();

    const handleOpenTaxModal = () => {
        dispatch(showTaxFormModal());
    }

    return (
        <div className="balance__container">
            <TaxesForm />
            <span className="screen-title mt-5 mb-5">Impuestos/Servicios</span>
            <TaxesList />
            <button onClick={handleOpenTaxModal} className="btn btn-primary mt-5">Agregar</button>
        </div>
    )
}
