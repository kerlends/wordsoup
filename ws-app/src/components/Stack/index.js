import React from 'react';
import { Card, CardStack } from 'react-cardstack';


export default () => (
  <CardStack
    height={500}
    width={400}
    background='#f8f8f8'
    hoveroffset={25}>

    <Card background='#2980b9'>
      <h4>Test</h4>
      <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        <li>item4</li>
      </ul>
    </Card>

    <Card background='#27ae60'>
      <h4>Test</h4>
      <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        <li>item4</li>
      </ul>
    </Card>

    <Card background='#9b27ae'>
      <h4>Test</h4>
      <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        <li>item4</li>
      </ul>
    </Card>
  </CardStack>
);
