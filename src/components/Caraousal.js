

const Caraousal = (props) => {
    const {resData2} = props;
  const {text} =
    resData2.action
  return (
    <div className="flex-col gap-[1cqw]">
    <img className="h-[12cqw] w-[10cqw]" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+ resData2.imageId }/>
      {/* {text} */}
    </div>
  )
}

export default Caraousal
