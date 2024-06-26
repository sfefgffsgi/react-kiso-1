export const PaginationPart = ({offset, setOffset, onClickFunction, retData=[]}) => {
    let className = 'pagination';
    let disabledPrev = '';
    if (offset <= 0) {
      disabledPrev = 'disabled';
    }

    return (
      <div className={className}>
        <button 
          onClick = {() => {
            console.log(retData);
            onClickFunction();
            setOffset(offset - retData.length);
          }}
          disabled = {disabledPrev}
        >
          Prev
        </button>
        <button 
          onClick = {() => {
            onClickFunction();
            setOffset(offset + retData.length);
          }}
        >
          Next
        </button>
      </div>
    )
  }
  
  export default PaginationPart;