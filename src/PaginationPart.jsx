import React, { useEffect} from 'react'

export const PaginationPart = ({offset, setOffset, onClickFunction, retData=[], dataLength=10, revMode=false}) => {
    let className = 'pagination';
    let disabledPrev = '';
    let disabledNext = '';
    if (offset <= 0) {
      if (revMode){
        disabledNext = 'disabled';
      } else {
        disabledPrev = 'disabled';
      }
    }

    if (retData.length != dataLength){
      if (revMode){
        disabledPrev = 'disabled';
      } else {
        disabledNext = 'disabled';
      }
    }

    useEffect(() => {
      onClickFunction()
    }, [offset])

    return (
      <div className={className}>
        <button 
          onClick = {() => {
            if (revMode){
              setOffset(offset + dataLength);
            } else {
              setOffset(offset - dataLength);
            }
          }}
          disabled = {disabledPrev}
        >
          Prev
        </button>
        <button 
          onClick = {() => {
            if (revMode){
              setOffset(offset - dataLength);
            } else {
              setOffset(offset + dataLength);
            }
          }}
          disabled = {disabledNext}
        >
          Next
        </button>
      </div>
    )
  }
  
  export default PaginationPart;