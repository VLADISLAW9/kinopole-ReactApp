import React from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

const Spinner = () => {
	const antIcon = (
		<LoadingOutlined style={{ fontSize: 100, color: '#b91c1c' }} spin />
	)
	return (
		<div className='flex justify-center items-center h-[100vh]'>
			<Spin indicator={antIcon} />
		</div>
	)
}

export default Spinner
