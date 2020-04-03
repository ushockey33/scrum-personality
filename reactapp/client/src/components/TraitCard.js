import {Card} from 'semantic-ui-react';
import React, { Component }  from 'react';
import { Draggable } from 'react-beautiful-dnd';
export default (props) => (
  <div class="ui card">
    <div class="image">
      <img src={props.cardImage}/>
    </div>
    <div class="content">
      <a class="header">{props.name}</a>
      <div class="meta">
        <span class="date">{props.extraUpper}</span>
      </div>
      <div class="description">
      {props.description}.
      </div>
    </div>
    <div class="extra content">
      <a>
        <i class="user icon"></i>
        {props.extraLower}
      </a>
    </div>
  </div>
);