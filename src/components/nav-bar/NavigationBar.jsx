import {  Text, 
    Flex, 
    Button,  
    IconButton, 
    useColorMode,
    Switch,
} from '@chakra-ui/react';
import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { HiMenu, HiOutlineX } from "react-icons/hi";


export default  function  Header() {
    const [display, setDisplay] = useState('none');
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    const toggleFunction = () => {
         setDisplay('flex');
    }

    return (
        <Flex  >
            <Flex position="fixed" align={"center"} bg={'coral'} px={{'base': 4, 'md':16}} w={'full'} py={2} justify={'flex-end'}>

                 {/* Desktop */}
        
                 <Flex display={['none', 'none', 'flex', 'flex']} mr={8} >
                    <Button variant={'ghost'} as="a" w={'full'} my={5}>
                        Home
                    </Button>
                    
                    <Button variant={'ghost'} as="a" w={'full'} my={5}>
                        About
                    </Button>
                    <Button variant={'ghost'} as="a" w={'full'} my={5}>
                        Contact
                    </Button>
                 </Flex>
                 

                 {/* Mobile */}
                 <IconButton display={["flex", "flex", "none", "none"]} icon={<HiMenu/>} size={'lg'} mr={2} onClick={toggleFunction} />
                 <Switch
                    isChecked={isDark}
                    onChange={toggleColorMode}
                 />
                </Flex>
                {/* mobile content */}
                 <Flex display={display} w='100vw' zIndex={20} h='100vh' pos={"fixed"} overflowY={'auto'}  bg={'blue.100'} flexDir="column">
                     {/* close button */}
                 <Flex justify={'flex-end'}>
                    <IconButton
                        mt={2}
                        mr={2}
                        aria-label="Open Menu"
                        size={'lg'}
                        icon={
                        <HiOutlineX />
                        }
                        onClick={() => setDisplay('none')}
                    />
                    </Flex>

                    <Flex align={'center'} flexDir={'column'}>
                        <Button variant={'ghost'} as="a" w={'full'} my={5} onClick={() => setDisplay('none')}>
                            Home
                        </Button>
                        <Button variant={'ghost'} as="a" w={'full'} my={5} onClick={() => setDisplay('none')}>
                            About
                        </Button>
                        <Button variant={'ghost'} as="a" w={'full'} my={5} onClick={() => setDisplay('none')}>
                            Contact
                        </Button>
                 </Flex>
            </Flex>
        </Flex>
    );

};