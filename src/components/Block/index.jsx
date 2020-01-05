import React from "react";
import { Button } from "antd";
import PropsType from 'prop-types'

import "./style.scss";

const Block = props => {
	const { title, value, handleClick } = props;
	return (
		<>
			<div></div>
			<div></div>
			<div className='block'>
				<h3>{title}</h3>
				<p>{value}</p>
				<Button type='primary' onClick={() => handleClick()}>
					Справка
				</Button>
			</div>
		</>
	);
};
Block.propTypes = {
  title: PropsType.string,
  value: PropsType.string,
  handleClick: PropsType.func
}

export default Block;
