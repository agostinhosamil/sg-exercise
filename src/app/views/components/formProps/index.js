const formProps = {}


export const useFormProps = () => {
	
	/**
	 * setFormProps
	 */
	const setFormProps = function setFormProps (referenceObject) {
		if (typeof referenceObject === 'object') {
			for (let key in referenceObject) {
				formProps[ key ] = referenceObject [ key ]
			}
		}
	}


	return { formProps, setFormProps, ...formProps }
}

export default formProps
