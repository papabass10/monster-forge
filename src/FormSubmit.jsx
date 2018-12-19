import React from 'react';

const FormSubmit = ({onFirstNumChange, onSecondNumChange, submitFields}) => {
	return(
		<div>
			<p>
						Enter first number of range: 
						<input onChange={onFirstNumChange} type='text' name='firstNum' id='firstNum'/>
						Enter second number of range:
						<input onChange={onSecondNumChange} type='text' name='secondNum' id='secondNum'/>
						<input onClick={submitFields} type='submit' value='Submit'/>
					</p>
		</div>
	)
}

export default FormSubmit;