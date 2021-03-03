import '../assets/display.css';
const CalculatorDisplay = props => {
    return(
        <>
         <div className='calculator-display'>
                <div className='operator-display'>
                    {props.operation ? props.operation : '0'}
                </div>
                <div className='result'>{props.result ? props.result : '0'}</div>
            </div>
        </>
    )
}
export default CalculatorDisplay;