import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";

//import myNews from "./data/news.json";
//var myNews = JSON.parse(fs.readFileSync('./data/news.json'));
var myNews = require('./data/news.json');

class Article2 extends React.Component {

  handleReadMoreClck = (e) => { // добавили метод
    e.preventDefault()
    console.log(this.state.currentPage)
    this.setState({currentPage:'ArticleDetail'})
    console.log(this.state.currentPage)
  }

  render() {
    const { author, text, bigText } = this.props.data;
    return (
      <div className="article">
        <p className="news__author">{author}:</p>
        <p className="news__text">{text}</p>
        <a onClick={this.handleReadMoreClck} href="#" className='news__readmore'>Подробнее</a>
      </div>
    )
  }
}

Article2.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    bigText: PropTypes.string.isRequired
  })
}

class News2 extends React.Component {
  renderNews = () => {
    const { data } = this.props;
    let newsTemplate = null;

    if (data.length) {
      newsTemplate = data.map(function(item) {
        return <Article key={item.id} data={item}/>
      })
    } else {
      newsTemplate = <p>К сожалению новостей нет</p>
    }
    return newsTemplate
  }
  render() {
    const { data } = this.props;
    return (
      <div className="news">
        {this.renderNews()}
        {data.length ? <strong className={'news__count'}>Всего новостей: {data.length}</strong> : null
        }
      </div>
    );
  }
}

News2.propTypes = {
  data: PropTypes.array.isRequired // PropTypes (с большой буквы) = библиотека prop-types
}
      
class Add extends React.Component {
  state = {
    name: "",
    text: "",
    agree: false,
  }

  onBtnClickHandler = (e) => {
    e.preventDefault()
    alert("Name is: " + this.state.name + "\nText is: " + this.state.text)
  }
  handleChange = (e) => {
    const { id, value } = e.currentTarget
    this.setState({ [id]: e.currentTarget.value })
  }
  handleCheckBoxChange = (e) => {
    this.setState({ agree: e.currentTarget.checked })
  }
  validate = () => {
    const { name, text, agree } = this.state;
    if(name.trim() && text.trim() && agree){
      return true
    }
    else return false
  }
  
  render() {
    const { name, text } = this.state
    return (
      <form className='add'>
        <input
          id='name'
          type='text'
          onChange={this.handleChange}
          className='add__author'
          placeholder='Ваше имя'
          value={name}
        />
        <textarea
          id='text'
          onChange={this.handleChange}
          className='add__text'
          placeholder='Текст новости'
          value={text}
        ></textarea>
        <label className='add__checkrule'>
          <input type='checkbox' onChange={this.handleCheckBoxChange} /> Я согласен с правилами
        </label>
        <button
          className='add__btn'
          onClick={this.onBtnClickHandler}
          disabled={!this.validate()}>
          Показать alert
        </button>
      </form>
    )
  }
}

//
class App2 extends Component {
  constructor() {
    super()
    this.state = { currentPage: 'Home' }
  }

  render() {
    return (
      <div className="App">
        <React.Fragment>
          <h3>Новости</h3>
          {console.log(this.state.currentPage)}
          {this.state.currentPage === 'Home'?<React.Fragment><News data={myNews}/></React.Fragment>:null}
          {this.state.currentPage === 'ArticleDetail' ? <News data={myNews}/> : null}
        </React.Fragment>
      </div>
    );
  }
}



    const phones =[
                    {id: 1, name: "iPhone 7"}, 
                    {id: 2, name: "Google Pixel"}, 
                    {id: 3, name: "HTC U Ultra"} 
                ];
 
    class Home extends React.Component{
        render(){
            return (
              <React.Fragment>
                <h2>Главная</h2>
                <ul>
                  <li>
                    <NavLink to={`/about`}>About page</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/news`}>News page</NavLink>
                  </li>
                </ul>
              </React.Fragment>
            );
        }
    }
    class About extends React.Component{
        render(){
            return <h2>О сайте</h2>;
        }
    }
    class NotFound extends React.Component{
        render(){
            return (
              <React.Fragment>
                <h2>Ресурс не найден</h2>
                <br></br>
                <p><NavLink to={`/`}>To main page..</NavLink></p>
              </React.Fragment>
          );
        }
    }
     class ArticlesList extends React.Component{
        render(){
          return (
            <div>
              <h2>List of all news</h2>
              {
                myNews.map(function(item){
                  return (
                    <div className="article-post" key={item.id}>
                      <p>Author: {item.author}</p>
                      <NavLink to={`/news/article/${item.id}`}>{item.text}</NavLink>
                    </div>
                  )
                })
              }
            </div>
          );
        }
    }
    class Article extends React.Component{
        render(){
            const prodId = this.props.match.params.id;
            let article;
            for(var i=0; i < myNews.length; i++){
                if(myNews[i].id == prodId){
                  article = myNews[i];
                    break;
                }
            }
            if(article === undefined)
                return <h2>Article isn't exist!</h2>;
            else
                return (
                  <React.Fragment>
                    <h3>Article about {article.text}</h3>
                    <p>{article.bigText}</p>
                    <h5>Author: {article.author}</h5>
                  </React.Fragment>
                );
        }
    }
    class News extends React.Component{
        render(){
            return (
              <div>
                <Switch>
                  <Route exact path="/news" component={ArticlesList} />
                  <Route path="/news/article/:id" component={Article} />
                </Switch>
              </div>
          );
        }
    }

    class App extends Component {
    
      render() {
        return (
          <div className="App">
            <React.Fragment>
              <Router>
                <div>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/news" component={News} />
                    <Route component={NotFound} />
                  </Switch>
                </div>
              </Router>
            </React.Fragment>
          </div>
        );
      }
    }

export default App;
