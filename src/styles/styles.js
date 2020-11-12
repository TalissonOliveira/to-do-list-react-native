import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF'
  },
  header: {
    backgroundColor: '#FFF',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',


    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  title: {
    //fontFamily: 'Arial',
    fontSize: 20,
    color: '#000'
  },
  inputStyle: {
    width: '95%',
    height: 50,
    borderColor: '#3C3C3C', 
    borderWidth: 1,
    borderRadius: 7,
    paddingLeft: 10,
    fontSize: 18,

    shadowColor: "#6C6C6C",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 3,
    
  },
  prioritys: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    
  },
  selectPriority: {
    width: '95%',
    paddingVertical: 2,
    flexDirection: 'row',
    //justifyContent: 'space-around',
    backgroundColor: '#EFEFEF',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: '2.5%',
    marginVertical: 15,

  },
  priority: {
    backgroundColor: '#FFF',
    width: '31.6%',
    height: 30,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',


    shadowColor: "#6C6C6C",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  textPriority: {
    //fontFamily: 'Arial',
    fontSize: 15,
  },
  select: {
    width: '15%',
    height: 50,
    //backgroundColor: 'green',
    borderColor: '#B35AF9',
    borderWidth: 1,
    borderRadius: 7,
  },
  input: {
    backgroundColor: '#EFEFEF',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
 
  },
  body: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    justifyContent: 'center',
  },
  flatList: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    //marginTop: 10,
    paddingHorizontal: '2.5%',
  },
  viewTask: {
    backgroundColor: '#FFF',
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderLeftWidth: 8,
    borderTopColor: '#fff',
    borderRightColor: '#fff',
    borderBottomColor: '#fff',
    borderLeftColor: '#19ED0F',
    borderRadius: 7,
    marginBottom: 10,
    //marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',


    shadowColor: "#6C6C6C",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  textTask: {
    //fontFamily: 'Arial',
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333'
  },
  buttonContainer: {
    /*alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 30*/
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    width: 70,
    height: 70,
    borderRadius: 35,
    bottom: 35,
    zIndex: 10
  },
  button: {
    /*backgroundColor: '#8A1AE1',
    width: 70,
    height: 70,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center'*/
    backgroundColor: '#8A1AE1',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 0,
    top: 5,
    left: 5,
    borderRadius: 30,
    shadowColor: 'grey',
    shadowOpacity: 0.1,
    shadowOffset: { x:2, y: 0},
    shadowRadius: 2,
    shadowOpacity: 5.0


  },
  footer: {
    backgroundColor: '#FFF',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',


    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 28,
  },
  //Tela criar task
  container2: {
    backgroundColor: '#EFEFEF'
  },
  containerBtn: {
    alignItems: 'center',
  },
  addButton: {
    width: '95%',
    height: 50,
    backgroundColor: '#8A1AE1',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,

    shadowColor: "#6C6C6C",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  txtBtn: {
    color: '#fff',
    fontSize: 20,
  }
});
 