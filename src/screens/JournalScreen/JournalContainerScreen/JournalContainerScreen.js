import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomButton from '../../../components/CustomButton/CustomButton';
import JournalCard from '../../../components/CustomCard/JournalCard/JournalCard';

const JournalContainerScreen = () => {
    
    const navigation = useNavigation();
    const [ journals, setJournals ] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/api/v1/journals')
        .then(resp => resp.json())
        .then(journalData => setJournals(journalData))
    }, [])

    const onJournalPressed = () => {
        console.warn('Time to Journal');
        navigation.navigate('SaveJournal')
    }

    const onHomePressed = () => {
        navigation.navigate('Home');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={{ fontSize: 35, alignItems: 'center' }}>Journal Archive</Text>

            <View>{journals.map(journal => <JournalCard journal={journal} key={journal.id} />)}</View>

            <CustomButton  text='Write in Journal' onPress={onJournalPressed} type='PRIMARY' />
            <CustomButton  text='Home' onPress={onHomePressed} type='PRIMARY' />

        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
root: {
    alignItems: 'center',
    padding: 20,
    paddingTop: 45
}
})

export default JournalContainerScreen