import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Navbar } from '../components/Homepage/Navbar';
import note from "../assets/note.png";

export default function HomePage() {
  return (
    <Box padding={8}>
      <Image right={0} position={"absolute"} w={500} src={note} />
      <Heading mt={16} textAlign={"start"} size={"4xl"}>Note App</Heading>
      <Text mt={8} maxW={"50%"} textAlign={"justify"}>
        A note application is a software program that allows users to create, 
        organize, and manage their digital notes. It is an essential tool for 
        anyone looking to streamline their daily tasks, increase productivity, 
        and stay organized.
      </Text>
    </Box>
  )
}
