'use strict';

//<h1 id="hello" class="myClass">Hello World</h1>
//var message = React.createElement('header', {id:'hello', className:'well'},
//     React.createElement('h1', {}, 'Hello World')
// );

var headerElem = <header className="well"><h1>Hello World</h1></header>;

var imgUrl = 'http://goo.gl/n1tBtn';
var pic = <img src={imgUrl} alt="A picture" />;


//include an element variable inside JSX
var main = <div>{headerElem}<main>{pic}</main></div>;

class HelloMessage extends React.Component {
  render() {
     return <h1>Hello Component!</h1>;
  }
}

class GoodbyeMessage extends React.Component {
  render() {

      var randomNum =Math.floor(Math.random()*2);
      if(randomNum === 0){
        return <h1>See ya later, alligator!</h1>;
      }
      else {
        return <h1>After a while, crocodaile!</h1>;
      }
  }
}

class MessageItem extends React.Component {
  render() {
    return <li>{this.props.message}</li>; //render based on prop
  }
}

class MessageList extends React.Component {
  render() {

     var theMessages = this.props.messages;

     var msgItemsArray = theMessages.map(function(msgStr){
        return <MessageItem message={msgStr} />;         
     })      
     //["one", "two", "three"] ===>>
     //[<MessageItem msg="one"> <MessageItem msg="two">, ...]

     return (
         <ul>
            {msgItemsArray}
         </ul>
     );
        //  <div>
        //     <HelloMessage />
        //     <GoodbyeMessage />
        //     <GoodbyeMessage />
        //     <MessageItem message="I am a message!" />
        //     <MessageItem message="So am I!" />
        //     <MessageItem message={calledMsg} />
        //  </div>

  }
}

function makeHello() { 
    return "Hello World";
}

var messagesArray = [
   "Hello world",
   "Black lives matter",
   "Go huskies!",
   "Is it lunch yet?"
];

ReactDOM.render(<MessageList messages={messagesArray} />, document.querySelector('#root'));


