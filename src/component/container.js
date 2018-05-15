import React, { Component } from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import update from "immutability-helper";
import Item from './item';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
					id: 1,
					text: 'Write a cool JS library',
				},
				{
					id: 2,
					text: 'Make it generic enough',
				},
				{
					id: 3,
					text: 'Write README',
				},
				{
					id: 4,
					text: 'Create some examples',
				},
				{
					id: 5,
					text:
						'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
				},
				{
					id: 6,
					text: '???',
				},
				{
					id: 7,
					text: 'PROFIT',
				}
      ]
    }
  }

  onMove = (dragIndex, hoverIndex) => {
    const { list } = this.state
		const dragItem = list[dragIndex]

		this.setState(
			update(this.state, {
				list: {
					$splice: [[dragIndex, 1], [hoverIndex, 0, dragItem]],
				},
			}),
		)
  }

  render() {
    const { list } = this.state
    const style = {
      width: 400,
    }

		return (
			<div style={style}>
				{list.map((item, index) => {
          return <Item id={item.id} index={index} key={item.id}
            text={item.text}
            onMove={this.onMove}/>
        })}
			</div>
		)
	}
}

export default DragDropContext(HTML5Backend)(Container);
