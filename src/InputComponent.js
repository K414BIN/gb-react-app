const InputComponent = ( props ) => {
    return <input value = {props.value} onChange = {(e) => props.onChange(e.target.value)}/>;
     
}

export default InputComponent;