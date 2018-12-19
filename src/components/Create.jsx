import React from 'react'

const Create = () => {
	return(
		<div>
			<p className='mt0 pt3'>Creation</p>
			<form>
				<label for='name' id='name-label'>Name</label>
				<input type='text' id='name' placeholder='Monster name'></input>
			</form>
		</div>
	)
}

export default Create