// pages folder can only be at root, or inside /src
import styled from 'styled-components'

const Title = styled.h1` // var must begin with uppercase
  color: red; // install vscode-styled-components by Julien Poissonnier
  span {
    color: green;
    display: block;
  }
`

export default function Home() {
  return (
    <Title>Hello World with TS!<span>Com styled-components</span></Title>
  )
}
