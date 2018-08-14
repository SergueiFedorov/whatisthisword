import React from 'react'
import { Text, Button, View, SectionList } from 'react-native'
import { connect } from 'react-redux'
import { startChallenge } from '../actions/navigation';

let ChallengeAFriend = ({navigation, text, startChallenge}) => {
    return (
       <Text>Challenge a Friend!</Text>
    )
}

// let ChallengeAFriend = connect(
//     // (state) => {

//     // },
//     // (dispatch) => {

//     // }
// )(ChallengeAFriend)

export { ChallengeAFriend }