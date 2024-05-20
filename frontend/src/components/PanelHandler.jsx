import ArrowIcon from "../assets/icons/ArrowIcon";
function PanelHandler({ isExpanded, handleExpand }) {
  return (
    <button onClick={handleExpand} className="flex items-center space-x-4">
      <span className="">
        {!isExpanded ? (
          <ArrowIcon size={40} direction={0} />
        ) : (
          <ArrowIcon size={40} direction={180} />
        )}
      </span>

      {isExpanded && <p className="link-primary">Collapse</p>}
    </button>
  );
}

export default PanelHandler;
