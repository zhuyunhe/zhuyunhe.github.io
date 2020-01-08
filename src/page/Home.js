import React, { Fragment, useState, useEffect } from 'react'
import styled from 'styled-components'
import animate from 'animateplus_ts';
import typer from 'typer-js';

class Home extends React.Component{
  constructor(props){
    super(props)
    //禁止在构造函数中调用setState，可以直接给state设置初始值
  }

  componentDidMount(){
    this.play();
  }

  async play(){
    const options = await animate({
      elements: '.card',
      duration: index => (index + 1) * 500,
      optimize: true,
      direction: 'normal',
      easing: 'in-out-cubic',
      'top': ['-1000px', '0']
    });
  }
  

  render(){
    return(
      <Fragment>
        <HomePage>
          <Card className="card blue" href="https://www.npmjs.com/package/js_toolbag" target="_blank">
            <p>toolkit</p>
          </Card>
          <Card className="card yellow" href="https://www.npmjs.com/package/animateplus_ts" target="_blank">
            <p>animateplus_ts</p>
          </Card>
          <Card className="card greend" href="https://www.npmjs.com/package/xianyun" target="_blank">
            <p>my_cli</p>
          </Card>
          <Card className="card red" href="https://github.com/zhuyunhe/daily-note">
            <p pre="abc">日常笔记</p>
          </Card>
        </HomePage>
        <Screen>
          <div className="screen-content"></div>
        </Screen>
        <KeyBoardWrap>

        </KeyBoardWrap>
        
      </Fragment>
    
    )
  }
}
function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
// 键盘，https://codepen.io/jakealbaugh/pen/dazIH
function KeyBoardWrap() {
  useEffect(()=>{
    const screenEleTyper = typer('.screen-content');
    screenEleTyper
      .line('hello')
      .line('欢迎进来看看')
      .pause(1000)
      .line('有空多多交流(bupt_zhuyunhe@163.com)')
      .line('有好的坑也可以叫我，谢谢')
    window.addEventListener('keydown', function (ev) {
      console.log(ev.keyCode);
    });
  });
  return (
    <KeyBoard className="keyboard">
      <KeyRow>
        <p id='kc-192' pre='~' suf='`'></p>
        <p id='kc-49' pre='!' suf='1'></p>
        <p id='kc-50' pre='@' suf='2'></p>
        <p id='kc-51' pre='#' suf='3'></p>
        <p id='kc-52' pre='$' suf='4'></p>
        <p id='kc-53' pre='%' suf='5'></p>
        <p id='kc-54' pre='^' suf='6'></p>
        <p id='kc-55' pre='&amp;' suf='7'></p>
        <p id='kc-56' pre='*' suf='8'></p>
        <p id='kc-57' pre=')' suf='9'></p>
        <p id='kc-48' pre='(' suf='0'></p>
        <p id='kc-189' pre='_' suf='-'></p>
        <p id='kc-187' pre='+' suf='='></p>
        <p id='kc-8' className="medium right" suf='delete'></p>
      </KeyRow>
      <KeyRow>
        <p id='kc-9' className="medium left" suf='tab'></p>
        <p id='kc-81' pre='q'></p>
        <p id='kc-87' pre='w'></p>
        <p id='kc-69' pre='e'></p>
        <p id='kc-82' pre='r'></p>
        <p id='kc-84' pre='t'></p>
        <p id='kc-89' pre='y'></p>
        <p id='kc-85' pre='u'></p>
        <p id='kc-73' pre='i'></p>
        <p id='kc-79' pre='o'></p>
        <p id='kc-80' pre='p'></p>
        <p id='kc-219' pre='{' suf='['></p>
        <p id='kc-221' pre='}' suf=']'></p>
        <p  id='kc-220' pre='|' suf='\'></p>
      </KeyRow>

      <KeyRow>
        <p id='kc-9' className="medium left" suf='caps'></p>
        <p id='kc-81' pre='a'></p>
        <p id='kc-87' pre='s'></p>
        <p id='kc-69' pre='d'></p>
        <p id='kc-82' pre='f'></p>
        <p id='kc-84' pre='g'></p>
        <p id='kc-89' pre='h'></p>
        <p id='kc-85' pre='j'></p>
        <p id='kc-73' pre='k'></p>
        <p id='kc-79' pre='l'></p>
        <p id='kc-80' pre=':' suf=';'></p>
        <p id='kc-219' pre='"' suf="'"></p>
        <p id='kc-221' className="medium right" pre='enter' suf='return'></p>
      </KeyRow>
      <KeyRow>
        <p id='kc-81' suf='shift' className="medium left"></p>
        <p id='kc-9' pre='z'></p>
        <p id='kc-81' pre='x'></p>
        <p id='kc-87' pre='c'></p>
        <p id='kc-69' pre='v'></p>
        <p id='kc-82' pre='b'></p>
        <p id='kc-84' pre='n'></p>
        <p id='kc-89' pre='m'></p>
        <p id='kc-85' pre='<' suf=','></p>
        <p id='kc-73' pre='>' suf='.'></p>
        <p id='kc-79' pre='l'></p>
        <p id='kc-221' suf='shift' className="medium right"></p>
      </KeyRow>
      <KeyRow>
        <p id='kc-81' className="small left" suf='fn'></p>
        <p id='kc-81' className="small left" suf='control'></p>
        <p id='kc-9' className="small left" pre='alt' suf='option'></p>
        <p id='kc-81' className="small left" suf='command'></p>
        <p id='kc-87' pre=' ' className="medium"></p>
        <p id='kc-69' className="small right" suf='command'></p>
        <p id='kc-82' className="small right" suf='option'></p>
        <p suf='⬅️'></p>
        <div>
          <p pre='⬅️' className="up"></p>
          <p suf='⬅️' className="down"></p>
        </div>
        <p suf='➡️' className="right"></p>
      </KeyRow>
    </KeyBoard>
  )
}

export default Home;

const Screen = styled.div`
  width: 420px;
  height: 220px;
  border-radius: 10px;
  border: 10px solid #d9d9d9;
  margin: 10px auto 0;
  padding: 10px;
  div{
    line-height: 20px;
  }
`;
const HomePage = styled.section`
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
  background-color: #fff;
`;

const Card = styled.a`
  position: relative;
  flex: 0 0 22%;
  height: 100px;
  text-shadow: 0 0 20px #fff;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
  text-align: center;
  border-radius: 6px;
  cursor: pointer;
  &.blue{
    background-image: linear-gradient(rgb(74,145,252),rgb(32, 78, 230));
  }
  &.yellow{
    background-image: linear-gradient(rgb(232,178,51),rgb(175, 125, 9));
  }
  &.red{
    background-image: linear-gradient(rgb(245, 65, 119),rgb(171, 4, 54));
  }
  &.greend{
    background-image: linear-gradient(rgb(105,232,51),rgb(53, 160, 8));
  }
  &::before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
  p{
    display: inline-block;
    vertical-align: middle;
  }
`

const KeyBoard = styled.div`
  margin-top: 10px;
`
const KeyRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 560px;
  margin: 4px auto;
  
  >p,>div{
    flex: 0 0 36px;
    flex-direction: column;
    justify-content: space-between;
    height: 36px;
    width: 36px;
    position:relative;
    border-radius: 4px;
    background-color: #fff;
    color: #444;
    box-shadow: 0px 2px 0px 1px #d7d7d7;
    margin-right: 4px;

    p{
      height: 18px;
      width: 36px;
      &:first-child{
        box-shadow: 0px 1px 0px 1px #d7d7d7;
      }
      &.up{
        &::before{
          left: 0;
          transform:  translate(50% ,0) rotate(90deg)
        }
      }
      &.down{
        &::after{
          transform: translate(-50% ,0) rotate(-90deg);
        }
      }
      
      &::before{
        content: attr(pre);
        position: absolute;
        font-size: 12px;
        text-transform: uppercase;
        top: 20%;
        left: 50%;
        transform: translate(-50%, 0);
      }
      &::after{
        content: attr(suf);
        position: absolute;
        font-size: 12px;
        text-transform: uppercase;
        top: 60%;
        left: 50%;
        transform: translate(-50%, 0);
      }
    }
    
    &:last-child{
      margin-right: 0;
    }
    &.left::before, &.left::after{
      left: 10%;
      transform: translate(0, 0);
    }
    &.right::before, &.right::after{
      right:10%;
      left: auto;
      transform: translate(0, 0);
    }
    &.small{
      flex: 0 0 42px;
      width: 42px;
      &::before, &::after{
        font-size: 6px;
        text-transform: lowercase;
      }
      &::before{
      }
      &::after{
        top: 70%;
      }
    }
    &.medium{
      flex: 1;
      &::before{
        font-size: 8px;
        text-transform: lowercase;
      }
      &::after{
        top: 70%;
        font-size: 8px;
        text-transform: lowercase;
      }
    }
    &::before{
      content: attr(pre);
      position: absolute;
      font-size: 12px;
      text-transform: uppercase;
      top: 20%;
      left: 50%;
      transform: translate(-50%, 0);
    }
    &::after{
      content: attr(suf);
      position: absolute;
      font-size: 12px;
      text-transform: uppercase;
      top: 60%;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
`;
