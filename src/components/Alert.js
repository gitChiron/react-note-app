import React, { useContext } from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { CSSTransition } from 'react-transition-group'

export const Alert = () => {
    const { alert, hide } = useContext(AlertContext)
    const nodeRef = React.useRef(null)

    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={alert.visible}
            timeout={300}
            classNames={'alert'}
            mountOnEnter
            unmountOnExit
        >
            <div
                ref={nodeRef}
                className={`alert alert-${alert.type || 'warning'} alert-dismissible fade show`}
                role="alert"
            >
                <strong>{alert.type === 'warning' ? 'Warning' : 'Success'}!</strong>
                &nbsp;{alert.text}
                <button
                    onClick={hide}
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </CSSTransition>
    )
}