import React from 'react'

export default ({ children, title }) => (
	<html>
		<head>
			<title>{ title }</title>
		</head>
		<body>
			{ children }
		</body>
	</html>
)
