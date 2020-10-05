import React from 'react'

import { Container, Global } from '@components/styles'

export default ({ children: PageComponent, ...rest }) => (
	<Container>
		<Global />
		<PageComponent { ...rest } />
	</Container>
)
