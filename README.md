# react-mental
Fast, performant and opinionated react library.

## Why?
Building scallable (large, performant and flexible) apps is a really hard task, but i personally and our (@openland) team have huge experience in building such apps but... not in web. Why? Because almost everywhere in the web community performance is important, but not too important for us and we wanted to change this. Most AAA developers i know have their own vision about how to build things and almost always their desicions for outsiders looks just sily, but they deliver unlike less educated developers. Because of this there is a name - Mental. We are going to implement things right without trying to incorporate "best" practices but to determine the best posttible way for user and development experience overall.

We are starting with a simple library that will use React Native (and React Native Web) and native mobile development ideas about how apps are need to be built.

## Example
```js
class SomeComponent extends React.Component {
  render() {
     return (
      <XView flexDirection="row" alignItems="center">
          <XView width={40} height={40} borderRadius={20} backgroundColor="red" color="white" aligntItems="center" justifyContent="center">
              SK
          </XView>
          <XView>
              Hello world!
          </XView>
      </XView>
     );
  }
}
```

## Why this is important?
Looks like React Native, right? One huge differences that our babel processor will extract this styles to a static CSS and you will *zero* overhead for CSS styles. (for dynamic styles we still generate them at runtime!)
We are used awesome library jsxstyle as inspiration and an example how well this could be done. But, unlike jsxstyle we are using different defaults and different API that have very **limited** css support. 
In mobile development we don't need too much of abilities to develop beside some very basic stuff. For example, we prohibit composition that is very popular in libraries like `styled-components`. Composition of styles often leads to huge problems in performance and eventually forces to rewrite app to make it fast. Also such flexible composition leads to very leaky abstractions that causes another problems in large apps.
We can use css-in-js libraries and use their static extraction of styles, but ALL libraries decided to abandon support for this and make everything in runtime. Well, good luck to optimize (rewrite) your apps to make it fast.

## License
MIT (c) Data Makes Perfect LLC
