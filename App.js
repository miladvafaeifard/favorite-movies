import React from 'react';
import { StyleSheet, View, FlatList, Text, Image } from 'react-native';
import Home from './components/Home';

const api = 'http://www.omdbapi.com/?i=tt3896198&apikey=8c08dafc&t=gone';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {result: {}};
    }

    componentDidMount() {
        fetch(api)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    result: responseJson
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    renderList() {
        const data = [{
            title: this.state.result.Title,
            imdbID: this.state.result.imdbID,
            src: this.state.result.Poster,
        }];

        return (
            <FlatList
                style={styles.movieList}
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                    return (
                        <View>
                            <Image source={{uri: item.src}}  style={{width: 40, height: 40}}/>
                            <Text>{item.title}</Text>
                        </View>
                    )
                }}
            />
        );

    }

    render() {

        return (
            <View style={styles.container}>
                {this.renderList()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    movieList: {
        flex: 1,
        width: '100%',
        marginTop: 100,
        backgroundColor: 'red'
    }
});
