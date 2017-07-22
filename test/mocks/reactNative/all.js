export const stateBefore1 = {
    '1': {
        id: 1,
        parent_id: 0,
        elementType: 'VIEW',
        style: {
            order: 1,
            width: '',
            alignItems: 'center',
            justifyContent: 'center',
            flex: '1',
            backgroundColor: '#F5FCFF'
        },
        data: {
            layer: 'container'
        },
        childIds: [
            2,
            3,
            4
        ]
    },
    '2': {
        id: 2,
        parent_id: 1,
        elementType: 'TEXT',
        style: {
            order: 1,
            width: '',
            height: '',
            flex: '',
            fontSize: '20px',
            textAlign: 'center',
            margin: '10px'
        },
        data: {
            content: 'Welcome to React Native!',
        },
        childIds: []
    },
    '3': {
        id: 3,
        parent_id: 1,
        elementType: 'TEXT',
        style: {
            order: 2,
            flex: 'none',
            textAlign: 'center',
            color: '#333333',
            marginBottom: '5px'
        },
        data: {
            content: 'To get started, edit index.android.js',
        },
        childIds: []
    },
    '4': {
        id: 4,
        parent_id: 1,
        elementType: 'TEXT',
        style: {
            order: 3,
            flex: 'none',
            textAlign: 'center',
            color: '#333333',
            marginBottom: '5px'
        },
        data: {
            content: ' Double tap R on your keyboard to reload, Shake or press menu button for dev menu',
        },
        childIds: []
    }
}


export const stateAfter1 = {
    jsx: '<View style={styles.container}><Text style={styles.text2}>Welcome to React Native!</Text><Text style={styles.text3}>To get started, edit index.android.js</Text><Text style={styles.text4}> Double tap R on your keyboard to reload, Shake or press menu button for dev menu</Text></View>',
    style: {container: {alignItems: 'center',justifyContent: 'center',flex: 1,backgroundColor: '#F5FCFF',},text2: {fontSize: 20,textAlign: 'center',margin: 10,},text3: {textAlign: 'center',color: '#333333',marginBottom: 5,},text4: {textAlign: 'center',color: '#333333',marginBottom: 5,}},
    dependencies:['StyleSheet', 'View', 'Text']
}

export const formatAfter1 = 'import React, { Component } from \'react\';\nimport {\n    StyleSheet,\n\tView,\n\tText\n} from \'react-native\';\n\nexport default class Layout extends Component {\n    render() {\n        return (\n            <View style={styles.container}>\n                <Text style={styles.text2}>Welcome to React Native!</Text>\n                <Text style={styles.text3}>To get started, edit index.android.js</Text>\n                <Text style={styles.text4}> Double tap R on your keyboard to reload, Shake or press menu button for dev menu</Text>\n            </View>\n        );\n    }\n}\n\nconst styles = StyleSheet.create({\n    "container": {\n        "alignItems": "center",\n        "justifyContent": "center",\n        "flex": 1,\n        "backgroundColor": "#F5FCFF"\n    },\n    "text2": {\n        "fontSize": 20,\n        "textAlign": "center",\n        "margin": 10\n    },\n    "text3": {\n        "textAlign": "center",\n        "color": "#333333",\n        "marginBottom": 5\n    },\n    "text4": {\n        "textAlign": "center",\n        "color": "#333333",\n        "marginBottom": 5\n    }\n});';

