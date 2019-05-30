import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class App extends Component {
    state = {};

    render() {
      return (
        <View style={styles.container}>
          <View style={styles.cover}>
            <View style={styles.imageContainer}>
              <View style={styles.img}><Image style={styles.image} /></View>
              <View style={styles.caption}><Text style={{ fontSize: 18, color: 'rgba(0,0,0,.5)' }}>1000 pages</Text></View>
            </View>
            <View style={styles.info}>
              <View style={styles.header}>
                <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'black' }}>The two surviving in the meber ssdjsd Founders</Text>
                <View><Text>By. Arnold P. Johnson</Text></View>
              </View>
              <View style={styles.priceStarsContainer}>
                <View style={styles.price}><Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>$129.99</Text></View>
                <View style={styles.stars}>
                  <Icon name="md-star" color="black" size={18} />
                  <Icon name="md-star" color="black" size={18} />
                  <Icon name="md-star" color="black" size={18} />
                  <Icon name="md-star" color="black" size={18} />
                  <Icon name="md-star" color="#bbb" size={18} />
                </View>
              </View>
              <View style={styles.buy}>
                <View style={styles.buyButton}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>BUY</Text>
                </View>
                <View style={styles.heartIcon}>
                  <Icon name="md-heart-empty" color="white" size={20} />
                </View>
              </View>
            </View>

          </View>

          <ScrollView style={{width: '100%', padding: 10 }}>
            <Text style={{ fontSize: 16 }}>
              Her cheekbones flaring scarlet as Wizard’s Castle burned, forehead drenched with azure when Munich fell to the Tank War,
              mouth touched with hot gold as a paid killer in the human system. 
              The semiotics of the previous century. The alarm still oscillated, louder here, the rear of the Villa bespeak a turning in, a denial of the bright void beyond the hull.
              Her cheekbones flaring scarlet as Wizard’s Castle burned, forehead drenched with azure when Munich fell to the Tank War, mouth touched with hot gold as a paid
              killer in the puppet place had been a subunit of Freeside’s security system. Light from a service hatch at the rear of the spherical chamber. Its hands were
              holograms that altered to match the convolutions of the Villa bespeak a turning in, a denial of the bright void beyond the hull. Now this quiet courtyard, Sunday afternoon,
              this girl with a random collection of European furniture, as though Deane had once intended to use the place as his home. Its hands were holograms that altered to match the
              convolutions of the Villa bespeak a turning in, a denial of the bright void beyond the hull. Why bother with the movement of the train, their high heels like polished hooves
              against the gray metal of the Villa bespeak a turning in, a denial of the bright void beyond the hull.

            </Text>
          </ScrollView>

        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#eee',
    // borderWidth: 1,
    // borderColor: 'black'
  },
  cover: {
    height: '45%',
    backgroundColor: 'yellow',
    // borderWidth: 1,
    // borderColor: 'blue',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    // paddingBottom: 5
  },
  imageContainer: {
    width: '40%',
    height: '100%',
    // borderWidth: 1,
    // borderColor: 'black',
    display: 'flex'
  },
  img: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    // paddingTop: 3,
    // paddingBottom: 3,
    // borderWidth: 1,
    // borderColor: 'orange',
    height: '80%'
  },
  image: {
    width: '100%',
    height: '90%',
    // borderWidth: 1,
    // borderColor: 'purple'
  },
  info: {
    width: '60%',
    // borderWidth: 1,
    // borderColor: 'red',
    height: '80%'
  },
  caption: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '20%',
    // borderWidth: 1,
    // borderColor: 'white'
  },
  header: {
    width: '100%',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    // borderWidth: 1,
    // borderColor: 'black',
    height: '80%'
  },
  priceStarsContainer: {
    height: '20%',
    // backgroundColor: 'lime',
    // alignItems: 'center',
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'row'
  },
  price: {
    width: '40%',
    backgroundColor: 'yellow',
    display: 'flex',
    justifyContent: 'center'
  },
  stars: {
    width: '60%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'yellow',
    justifyContent: 'space-evenly',
  },
  buy: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '20%',
    width: '100%',
    // borderWidth: 1,
    // borderColor: 'green',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  buyButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    height: '100%',
    width: '60%',
    borderRadius: 50,
    marginRight: 10,
    backgroundColor: 'blue'
  },
  heartIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    backgroundColor: 'red',
    height: '100%',
    width: '19%',
    borderRadius: 50
  }
});
