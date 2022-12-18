import React from "react";
import { Heading, Text, Divider, Card, CardHeader, CardBody } from "@chakra-ui/react";

export default function NewsCard (props) {

    return (
        <Card variant={"outline"} align={"start"}> 
            <CardHeader>
                <Heading >{props.title}</Heading>
            </CardHeader>
            <Divider />
            <CardBody>
                <Text textAlign={"left"}>{props.body}</Text>
            </CardBody>
        </Card>
    );
}