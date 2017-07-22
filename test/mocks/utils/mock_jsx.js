export const before1 = `<View style={styles.view1}><Text style={styles.text2}>Lorem ipsum</Text></View>`;

export const after1 = `<View style={styles.view1}>
    <Text style={styles.text2}>Lorem ipsum</Text>
</View>`;

export const before2 = `<View style={styles.view1}><Text style={styles.text2}>Lorem ipsum</Text><Image style={styles.image3} source={{uri: 'https://rnbin.com/images/image.png'}}></Image><Image style={styles.image4} source={{uri: 'https://rnbin.com/images/image.png'}}></Image><Text style={styles.text5}>Lorem ipsum</Text><Text style={styles.text6}>Lorem ipsum</Text></View>`;

export const after2 = `<View style={styles.view1}>
    <Text style={styles.text2}>Lorem ipsum</Text>
    <Image style={styles.image3} source={{uri: 'https://rnbin.com/images/image.png'}}></Image>
    <Image style={styles.image4} source={{uri: 'https://rnbin.com/images/image.png'}}></Image>
    <Text style={styles.text5}>Lorem ipsum</Text>
    <Text style={styles.text6}>Lorem ipsum</Text>
</View>`;


export const before3 = `<View style={styles.view1}><View style={styles.view2}><Text style={styles.text2}>Lorem ipsum</Text><Image style={styles.image3} source={{uri: 'https://rnbin.com/images/image.png'}}></Image></View></View>`;

export const after3 = `<View style={styles.view1}>
    <View style={styles.view2}>
        <Text style={styles.text2}>Lorem ipsum</Text>
        <Image style={styles.image3} source={{uri: 'https://rnbin.com/images/image.png'}}></Image>
    </View>
</View>`;

