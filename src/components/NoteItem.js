import React, { useContext } from 'react'
import { AlertContext } from '../context/alert/alertContext'
import ReactTimeAgo from 'react-time-ago'

export const NoteItem = ({ nodeRef, note, onRemove }) => {
    const alert = useContext(AlertContext)

    return (
        <div className="block">
            <div ref={nodeRef} className="note__item mx-2 mb-4">
                <div className="note__header pt-2">
                    <small>
                        <ReactTimeAgo date={Date.parse(note.date)} />
                    </small>
                    <button
                        type="button"
                        className="ml-2 close"
                        aria-label="Close"
                        onClick={() => {
                            onRemove(note.id)
                                .then(() => alert.show('Note was removed', 'success'))
                        }}
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="note__body pb-2">
                    {note.title}
                </div>
            </div>
        </div>
    )
}