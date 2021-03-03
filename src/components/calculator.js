/* eslint-disable no-eval */
import React from 'react';
import CalculatorDisplay from './calculatorDisplay';
import '../assets/calculator.css';
import {useState} from 'react';
import Button from './button'
const Calculator = () => {
    var [operation , setOperation] = useState('');
    var [result , setResult] = useState('');
    const handleClick = e => {
        const value = e.target.value;
        switch(value) {
            case '=': {
                if(operation !== '') {
                    var ans = '';
                    try {
                        ans = eval(operation);
                    } catch(err) {
                        setResult('Math Error');
                    } if (ans === undefined) {
                        setResult('Math Error');
                    } else {
                        setResult(ans);
                        setOperation(operation);
                    } 
                }
                break;
            }
            case 'Clear': {
                setOperation('');
                setResult('');
                break;
            } 
            case 'Delete' : {
                var str = operation;
                str = str.substr(0 , str.length-1);
                setOperation(str);
                break;
            }
            default: {
                setOperation(operation += value);
            }
        }
    }
    console.log(operation);
    return (
        <>
        <h1 style={{textAlign:'center'}}>Calculator with <span style={{color:'orange'}}>ReactJS</span></h1>
        <div className='calculator'>
           
           <CalculatorDisplay operation={operation} result={result} />
           <div className='calculator-keys'>
            <Button label={'+'} className='key-operator' handleClick={handleClick}/>
            <Button label={'-'} className='key-operator' handleClick={handleClick}/>
            <Button label={'*'} className='key-operator' handleClick={handleClick}/>
            <Button label={'/'} className='key-operator' handleClick={handleClick}/>
            <Button label={'7'} handleClick={handleClick}/>
            <Button label={'8'} handleClick={handleClick}/>
            <Button label={'9'} handleClick={handleClick}/>
            <Button label={'4'} handleClick={handleClick}/>
            <Button label={'5'} handleClick={handleClick}/>
            <Button label={'6'} handleClick={handleClick}/>
            <Button label={'1'} handleClick={handleClick}/>
            <Button label={'2'} handleClick={handleClick}/>
            <Button label={'3'} handleClick={handleClick}/>
            <Button label={'0'} handleClick={handleClick}/>
            <Button label={'.'} handleClick={handleClick}/>
            <Button label={'Delete'} handleClick={handleClick}/>
            <Button label={'%'} handleClick={handleClick}/>
            <Button label={'Clear'} className='clear-button' handleClick={handleClick}/>
            <Button label={'='} className='key-equal' handleClick={handleClick}/>
           </div>
            
        </div>
        </>
    )
}
export default Calculator;