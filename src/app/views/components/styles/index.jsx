import styled, { createGlobalStyle } from 'styled-components'

export const Container = styled.div`
	width: 100%;
	max-width: 700px;
	height: 100%;
	margin: auto;
	padding: 30px .0px;
	position: relative;
`

export const Global = createGlobalStyle`
	html, body {
		height: 100%;
	}

	html, body, h1, h2, h3, h4, h5 {
		margin: 0px;
		padding: 0px;
	}

	* {
		box-sizing: border-box;
	}
`

export const Header = styled.div`
	padding: .0px .0px 20px;
	width: 100%;
	height: auto;

	h1 {
		font-size: 35px;
		color: #1f4e79;
		font-family: "Arial", helvetica, sans-serif;
		font-weight: 300;
	}
`
