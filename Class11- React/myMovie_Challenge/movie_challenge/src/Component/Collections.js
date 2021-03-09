import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addNewNote } from '../actions/BoardAction'
import Board from '../components/Board'
import NoteContainer from '../containers/NoteContainer'

export default connect(
    mapStateToProps,
    { addNewNote }
)(BoardContainer)
import React from 'react';
import '../css/Board.css';

const BoardContainer = ({ notes, addNewNote }) => (
    <Board
        notes={notes}
        onAddNoteClicked={() => {
            addNewNote();
        }}
    >
        {notes.map((note, index) => (
            <NoteContainer key={index} id={note.id} title={note.title} body={note.body}/>
        ))}
    </Board>
)

BoardContainer.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    })).isRequired,
    addNewNote: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    notes: state.boardReducer.notes
});



class Board extends React.Component {

    render() {
        return (
            <div>
                <div className="div-board">
                    <div className="row">
                        {this.props.children}
                    </div>
                </div>
                <div>
                    <button
                        className="btn btn-success add-button"
                        onClick={this.props.onAddNoteClicked}
                    >
                        Add
                    </button>
                </div>
            </div>
        );
    }
}

export default Board;