import React, { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Meta from "./Meta";
import { Box, Container, Flex, VStack } from "@chakra-ui/react";
import { HeaderProps } from "types/header";
import { FooterProps } from "types/footer";

interface Props {
    children: ReactNode;
}

const Layout = (props: Props) => {
    return (
        <>
            <Header />
            <Meta />
            <Flex
                w="full"
                px={{ base: 4, md: 12 }}
                bg="gray.50"
                h="full"
                flexDir="column"
                pos="relative"
            >
                {props.children}
            </Flex>
            <Footer />
        </>
    );
};

export default Layout;
