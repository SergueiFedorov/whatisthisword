import React from 'react'
import { Text, Button, View, SectionList } from 'react-native'
import { connect } from 'react-redux'
import { startChallenge } from '../actions/navigation';

let GuessWord = ({navigation, text, startChallenge}) => {
    return (
       <Text>Here</Text>
    )
}

// let GuessWord = connect(
//     (state) => {

//     },
//     (dispatch) => {

//     }
// )(GuessWord)

export { GuessWord }