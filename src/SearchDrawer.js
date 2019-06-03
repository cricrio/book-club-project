import React from "react";

import {
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerSubtitle,
  DrawerContent
} from "@rmwc/drawer";

import { List, ListItem } from "@rmwc/list";


export const SearchDrawer = () => (
  <Drawer>
    <DrawerHeader>
      <DrawerTitle>DrawerHeader</DrawerTitle>
      <DrawerSubtitle>Subtitle</DrawerSubtitle>
    </DrawerHeader>
    <DrawerContent>
      <List>
        <ListItem>Cookies</ListItem>
        <ListItem>Pizza</ListItem>
        <ListItem>Icecream</ListItem>
      </List>
    </DrawerContent>
  </Drawer>
);
