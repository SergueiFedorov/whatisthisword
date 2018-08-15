import React from 'react'
import { Text, Button, View, SectionList } from 'react-native'
import { connect } from 'react-redux'
import { startChallenge } from '../actions/navigation';
import { createPlayer } from '../actions/player';

let ChallengeAFriend = ({navigation, createPlayer}) => {
    createPlayer()
    return (
       <Text>Challenge a Friend!</Text>
    )
}

// ChallengeAFriend = connect(
//     null,
//     (dispatch) => {
//         return {
//             createPlayer: () => dispatch(createPlayer())
//         }
//     }
// )(ChallengeAFriend)

export { ChallengeAFriend }