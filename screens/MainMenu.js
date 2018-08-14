import React from 'react'
import { Text, Button, View, SectionList } from 'react-native'
import { connect } from 'react-redux'
import { startChallenge } from '../actions/navigation';


let MainMenu = ({navigation}) => {
    return (
        <SectionList
            keyExtractor={(item, index) => item.title + index}
            sections={[
                {
                    "data": 
                        [{
                            "title": "Guess A Word",
                            "navigate": "GuessWord"
                        }]
                },
                {
                    "data": 
                        [{
                            "title": "Challenge A Friend",
                            "navigate": "ChallengeAFriend"
                        }]
                }
            ]}
            renderItem={({item, index, section}) => <Button title={item.title} onPress={
                () => {
                    navigation.push(item.navigate)
                }
            }></Button>}
        >
        </SectionList>
    )
}

MainMenu = connect(
    (state) => {
        return {
            text: state.navigation.text
        }
    },
    (dispatch) => {
        return {
            startChallenge: () => dispatch(startChallenge())
        }
    }
)(MainMenu)

export { MainMenu }