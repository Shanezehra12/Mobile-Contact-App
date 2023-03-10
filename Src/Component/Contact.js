import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {alphabetlistview} from 'react-native-alphabetlistview'


/* export default function Contact() { */

    class SectionHeader extends Component {
        render() {
          // inline styles used for brevity, use a stylesheet when possible
          var textStyle = {
            textAlign:'center',
            color:'#fff',
            fontWeight:'700',
            fontSize:16
          };
      
          var viewStyle = {
            backgroundColor: '#ccc'
          };
          return (
            <View style={viewStyle}>
              <Text style={textStyle}>{this.props.title}</Text>
            </View>
          );
        }
      }
      
      class SectionItem extends Component {
        render() {
          return (
            <Text style={{color:'#f00'}}>{this.props.title}</Text>
          );
        }
      }
      
      class Cell extends Component {
        render() {
          return (
            <View style={{height:30}}>
              <Text>{this.props.item}</Text>
            </View>
          );
        }
      }

      export default class extends Component {

        constructor(props, context) {
          super(props, context);
      
          
          };
        }

        return (
            <alphabetlistview
                data={this.state.data}
                cell={Cell}
                cellHeight={30}
                sectionListItem={SectionItem}
                sectionHeader={SectionHeader}
                sectionHeaderHeight={22.5}
              />
          )

        
    }

  


const styles = StyleSheet.create({})