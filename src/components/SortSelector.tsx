import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
  return (
    <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown />} >Order By</MenuButton>
    <MenuList>
        <MenuItem>1</MenuItem>
        <MenuItem>1</MenuItem>
        <MenuItem>1</MenuItem>
        <MenuItem>1</MenuItem>
        <MenuItem>1</MenuItem>
    </MenuList>
</Menu>
  )
}

export default SortSelector