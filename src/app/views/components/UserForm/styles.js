import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0px;
	left: 0px;
	background-color: rgba(0, 0, 0, .93);

	form {
		background-color: #ffffff;
		border: 1px solid #dcdcdc;
		display: block;
		width: 100%;
		max-width: 700px;
		margin: 100px auto .0px;
	}
`

export const Title = styled.h1`
	color: #ffffff;
`

export const Label = styled.label`
	width: 100%;
	display: inline-block;
`

export const Input = styled.input`
	width: 100%;
`

export const OptionButton = styled.a`
	color: red;
`
