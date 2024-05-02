import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
* {

}

body {
    margin: 0;
}

.fa-star {
    color: #FF6060;
}
`

function GlobalStyle() {
    return <StyledGlobalStyle/>
}

export default GlobalStyle