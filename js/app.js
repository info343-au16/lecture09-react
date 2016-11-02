'use strict';

//<header id="hello" class="well"><h1>Hello World</h1></header>
var header = <header className="well"><h1>Hello World</h1></header>;
//define a JS variable
var imgUrl = 'http://goo.gl/n1tBtn';
//include the URL in the JSX
var pic = <img src={imgUrl} alt="A picture" />;
var main = <div>{header}<main>{pic}</main></div>;

class HelloMessage extends React.Component {
  render() {
     return <h1>Hello {this.props.greetee}</h1>;
  }
}

class GoodbyeMessage extends React.Component {
  render() {
      //0 or 1
      var randomNum = Math.floor(Math.random()*2);
      if(randomNum === 0){
        return <h1>See ya later, alligator!</h1>;
      } else {
        return <h1>After a while, crocodile!</h1>;
      }
  }
}

class MessageItem extends React.Component {
    render() {
        return <li>{this.props.msg}</li>;
    }
}

class MessageList extends React.Component {
    render() {

        //do something with this.props.messages
        var msgItemsArray = this.props.messages.map(function(msgStr){
            return <MessageItem msg={msgStr} other="hi" />;
        })
        //["str", "str", "str] ==>
        //[<MsgItem>, <MsgItem>, <MsgItem>]

        return (
            <ul>
                {msgItemsArray}
            </ul>
        );
    }
}

var messagesArray = [
   "Hello world",
   "Black lives matter",
   "Go huskies!",
   "I am sooooo tired"
];

ReactDOM.render(<MessageList messages={messagesArray} />, document.querySelector('#root'));