import React, { useContext, useEffect } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { NoteItem } from './NoteItem'
import { FirebaseContext } from '../context/firebase/firebaseContext'
import { Loader } from './Loader'

export const Notes = () => {
    const { loading, notes, fetchNotes, removeNote } = useContext(FirebaseContext)
    const nodeRef = React.useRef(null)

    useEffect(() => {
        fetchNotes()
        //eslint-disable-next-line
    }, [])

    return (
        <div className="row justify-content-center">
            {loading ?
                <Loader /> :
                <TransitionGroup className="notes">
                    {notes.map((note) => (
                        <CSSTransition
                            nodeRef={nodeRef}
                            key={note.id}
                            classNames="note"
                            timeout={300}
                        >
                            <NoteItem
                                nodeRef={nodeRef}
                                note={note}
                                onRemove={removeNote}
                            />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            }
        </div>
    )
}