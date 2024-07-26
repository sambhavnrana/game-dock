import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode;  // ReactNode is a TypeScript type that represents a component's children in React
}


const GameCardContainer = ({ children }: Props) => {
    return (
        <Box width='100%' borderRadius={10} overflow="hidden">
            {children}
        </Box>
    )
}

export default GameCardContainer