import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
* {

}

body {
    margin: 1rem;
    width: 100%;
    height: 100%;
}
`

function GlobalStyle() {
    return <StyledGlobalStyle/>
}

export default GlobalStyle